import type { ProFormInstance } from '@ant-design/pro-components';
import {
  ProFormText,
  DrawerForm,
  ProFormSwitch,
  ProFormDateTimeRangePicker,
  ProForm,
  EditableProTable,
  ProFormDateTimePicker,
} from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React, { useEffect, useRef, useState } from 'react';
import type { V1CreateProductRequest, V1Price, V1UpdateProduct } from '@gosaas/api';
import { ProductServiceApi } from '@gosaas/api';
import { dateUtil } from '@gosaas/core';
import { Form } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { priceTableColumns } from '../price';

const service = new ProductServiceApi();

export type FormValueType = V1CreateProductRequest & V1UpdateProduct;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: FormValueType;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const intl = useIntl();
  const formRef = useRef<ProFormInstance>();
  useEffect(() => {
    //fetch role detail
    if (props.values?.id && props.updateModalVisible) {
      service.productServiceGetProduct({ id: props.values?.id }).then((resp) => {
        formRef?.current?.setFieldsValue(resp.data);
      });
    }
  }, [props]);

  const [form] = Form.useForm();
  const prices = Form.useWatch<V1Price[]>('prices', form);
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(
    props.values?.prices?.map((p) => p.id!) ?? [],
  );
  useEffect(() => {
    setEditableRowKeys(prices?.map((p) => p.id!));
  }, [prices]);

  return (
    <DrawerForm
      form={form}
      formRef={formRef}
      initialValues={props.values}
      open={props.updateModalVisible}
      onFinish={async (formData) => {
        const { saleableFrom, saleableTo, ...data } = formData;
        const ret = {
          id: props.values?.id,
          saleableFrom: saleableFrom ? dateUtil(saleableFrom).toISOString() : undefined,
          saleableTo: saleableTo ? dateUtil(saleableTo).toISOString() : undefined,
          ...data,
        };
        await props.onSubmit(ret);
      }}
      drawerProps={{
        onClose: () => {
          props.onCancel();
        },
        destroyOnClose: true,
      }}
    >
      <ProFormText
        name="title"
        label={intl.formatMessage({
          id: 'saas.product.title',
          defaultMessage: 'Product Title',
        })}
        rules={[
          {
            required: true,
          },
        ]}
      />
      <ProFormText
        name="shortDesc"
        label={intl.formatMessage({
          id: 'saas.product.shortDesc',
          defaultMessage: 'Product Short Desc',
        })}
      />
      {!props.values.id && (
        <ProFormSwitch
          name="multiSku"
          label={intl.formatMessage({
            id: 'saas.product.multiSku',
            defaultMessage: 'Multi Sku',
          })}
        />
      )}
      <ProFormSwitch
        name="needShipping"
        label={intl.formatMessage({
          id: 'saas.product.needShipping',
          defaultMessage: 'Shipping',
        })}
      />
      <ProFormDateTimePicker
        name="saleableFrom"
        label={intl.formatMessage({
          id: 'saas.product.saleableFrom',
          defaultMessage: 'Saleable From',
        })}
      />
      <ProFormDateTimePicker
        name="saleableTo"
        label={intl.formatMessage({
          id: 'saas.product.saleableTo',
          defaultMessage: 'Saleable To',
        })}
      />
      <ProFormSwitch
        name="active"
        label={intl.formatMessage({
          id: 'saas.product.active',
          defaultMessage: 'Active',
        })}
      />
      <ProForm.Item
        label={intl.formatMessage({
          id: 'ticketing.show.saleType.name',
          defaultMessage: 'Sale Type',
        })}
        name="salesTypes"
        trigger="onValuesChange"
      >
        <EditableProTable<V1Price>
          rowKey="id"
          toolBarRender={false}
          columns={priceTableColumns}
          recordCreatorProps={{
            newRecordType: 'dataSource',
            position: 'bottom',
            record: () => ({ id: uuidv4() }),
          }}
          editable={{
            type: 'multiple',
            editableKeys,
            actionRender: (row, _, dom) => {
              return [dom.delete];
            },
          }}
        />
      </ProForm.Item>
    </DrawerForm>
  );
};

export default UpdateForm;
