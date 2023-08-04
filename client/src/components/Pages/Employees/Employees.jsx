import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

import {
  Form,
  InputNumber,
  Radio,
  Select,
  Button,
  Input,
  Modal,
  PageHeader,
  Space,
  Table,
  Tag,
  message,
  Popconfirm,
} from "antd";
import Default from "../../DefaultLayout/Default";
import { useEffect, useState } from "react";
import axios from "axios";

import TableComponent from "../../Global/TableComponent";
import useColumnSearch from "../../hooks/getColumnProps";
import { API as url } from "../../../API.js";

const Employees = () => {
  const [dataEmployees, setDataEmployees] = useState([]);
  const [active, setActive] = useState({
    btnAdd: false,
    edit: false,
    remove: false,
    index: 0,
  });
  const [valueForm, setValueForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    extension: "",
    jobTitle: "",
    officeCode: "",
  });
  const handleChange = (event) => {
    const { id, value } = event.target;
    setValueForm((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleSelectChange = (value, name) => {
    setValueForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const confirm = async (e, id) => {
    console.log("id", id);
    try {
      const res = await axios.delete(`${url}/delete/emp`, id)
      console.log(res);
      if (res.data.success) message.success("Deleted employee successfully ");
      else message.error("There was an error deleting the employee");
    } catch (error) {
      message.error("There was an error deleting the employee");
    }
  };
  const [unique, setUnique] = useState({ office: [], jobTitle: [] });

  const [getColumnSearchProps] = useColumnSearch();
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios.get(`${url}/employee`);
        setDataEmployees(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    if (dataEmployees.length > 0) {
      const uniqueOffices = UniqueValue(dataEmployees, "officeCode");
      const uniqueJobTitles = UniqueValue(dataEmployees, "jobTitle");
      setUnique({
        ...unique,
        office: uniqueOffices,
        jobTitle: uniqueJobTitles,
      });
      console.log(unique);
    }
  }, [dataEmployees]);

  const handleAddEmp = () => {
    setActive({
      ...active,
      btnAdd: true,
    });
  };
  console.log(valueForm);
  const handleEdit = (id) => {
    setActive({ ...active, edit: true, remove: false, index: id });
  };

 
  const hideModal = () => {
    setActive({ ...active, btnAdd: false, edit: false, remove: false });
  };

  const UniqueValue = (array, propertyName) => {
    const dataUnique = [];
    array.forEach((data) => {
      if (!dataUnique.includes(data[propertyName])) {
        dataUnique.push(data[propertyName]);
      }
    });
    return dataUnique;
  };

  const columnTable = [
    {
      title: "Employee ID",
      dataIndex: "employeeNumber",
      key: "employeeNumber",
      width: "10%",
      ...getColumnSearchProps("employeeNumber"),
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      width: "10%",
      ...getColumnSearchProps("firstName"),
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      width: "10%",
      ...getColumnSearchProps("lastName"),
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "20%",
      ...getColumnSearchProps("email"),
    },
    {
      title: "OfficeCode",
      dataIndex: "officeCode",
      key: "officeCode",
      width: "10%",
      ...getColumnSearchProps("officeCode"),
    },

    {
      title: "Extension",
      dataIndex: "extension",
      key: "extension",
      width: "10%",
      ...getColumnSearchProps("extension"),
    },
    {
      title: "Job Title",
      dataIndex: "jobTitle",
      key: "jobTitle",
      width: "20%",
      ...getColumnSearchProps("jobTitle"),
      sorter: (a, b) => a.extension.length - b.extension.length,
      sortDirections: ["descend", "ascend"],
      render: (jobTitle) => {
        let color;
        if (jobTitle == "President") {
          color = "cyan";
        } else if (jobTitle == "VP Sales") {
          color = "green";
        } else if (jobTitle == "VP Marketing") {
          color = "red";
        } else if (jobTitle === "Sales Manager (APAC)") {
          color = "#2db7f5";
        } else if (jobTitle == "Sale Manager (EMEA)") {
          color = "#108ee9";
        } else if (jobTitle == "Sales Manager (NA)") {
          color = "#f507";
        } else if (jobTitle == "Sales Rep") {
          color = "#87d068";
        }
        return (
          <Tag color={color} key={color}>
            {jobTitle}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(record.employeeNumber)}
            style={{ backgroundColor: "yellow", border: "none" }}
          />
          <Popconfirm
            title="Delete employee"
            description="Are you sure to delete this employee ?"
            onConfirm={() => confirm(_, record.employeeNumber)}
            // onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button
              // onClick={() => handleRemove(record.employeeNumber)}
              icon={<DeleteOutlined />}
              type="primary"
              danger
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const [form] = Form.useForm();
  const [formErrors, setFormErrors] = useState({});

  const AddAPI = async () => {};

  const handleSubmit = async (values, event) => {
    // Kiểm tra các trường bắt buộc nếu rỗng
    // const errors = {};
    // if (!values.extension) {
    //   errors.extension = "Extension is required!";
    // }
    // if (!values.firstName) {
    //   errors.firstName = "firstName is required!";
    // }
    // if (!values.lastName) {
    //   errors.lastName = "lastName is required!";
    // }

    // if (!values.officeCode) {
    //   errors.officeCode = "officeCode is required!";
    // }
    // if (!values.jobTitle) {
    //   errors.jobTitle = "Job Title is required!";
    // }

    // event.preventDefault();
    // Xử lý dữ liệu form ở đây
    await AddAPI();
  };

  return (
    <>
      <Default>
        <PageHeader title="Manager Employees" />
        <Space className="mb-4">
          <Button
            icon={<PlusCircleOutlined />}
            type="primary"
            onClick={handleAddEmp}
            size="large"
          >
            Add Emp
          </Button>
        </Space>
        <TableComponent
          dataSource={dataEmployees}
          scroll={{
            y: 300,
          }}
          columns={columnTable}
        />

        {/* === FORM ADD EMPLOYEE ===  */}
        <Modal
          open={active.btnAdd}
          onCancel={hideModal}
          title="Form Add Employee"
        >
          <Form
            style={{ width: "100%" }}
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
          >
            <Form.Item label="Form Size" name="size">
              <Radio.Group>
                <Radio.Button value="small">Small</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="First Name"
              name="firstName"
              validateStatus={formErrors.firstName ? "error" : ""}
              help={formErrors.firstName}
              hasFeedback
              rules={[{ required: true, message: "First Name is required!" }]}
            >
              <Input
                id="firstName"
                value={valueForm.firstName}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              validateStatus={formErrors.lastName ? "error" : ""}
              help={formErrors.lastName}
              rules={[{ required: true, message: "Last Name is required!" }]}
            >
              <Input
                id="lastName"
                value={valueForm.lastName}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              validateStatus={formErrors.email ? "error" : ""}
              help={formErrors.email}
              rules={[{ required: true, message: "Email is required!" }]}
            >
              <Input
                name="email"
                value={valueForm.email}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              label="Office Code"
              name="officeCode"
              validateStatus={formErrors.officeCode ? "error" : ""}
              help={formErrors.officeCode}
              rules={[{ required: true, message: "Office Code is required!" }]}
            >
              <Select
                value={valueForm.officeCode}
                onChange={(value) => handleSelectChange(value, "officeCode")}
              >
                {unique.office
                  .sort((a, b) => a - b)
                  .map((item) => (
                    <Select.Option value={item} key={item}>
                      {item}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Extension"
              name="extension"
              validateStatus={formErrors.extension ? "error" : ""}
              help={formErrors.extension}
              rules={[{ message: "Extension is required!" }]}
            >
              <Input
                id="extension"
                value={valueForm.extension}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              label="Job Title"
              name="jobTitle"
              validateStatus={formErrors.jobTitle ? "error" : ""}
              help={formErrors.jobTitle}
              rules={[{ required: true, message: "Job Title is required!" }]}
            >
              <Select
                name="jobTitle"
                value={valueForm.jobTitle}
                onChange={(value) => handleSelectChange(value, "jobTitle")}
              >
                {unique.jobTitle.map((item) =>
                  item === "President" ? (
                    <Select.Option disabled key={item}>
                      {item}
                    </Select.Option>
                  ) : (
                    <Select.Option value={item} key={item}>
                      {item}
                    </Select.Option>
                  )
                )}
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="Remove Employee"
          open={active.remove}
          onCancel={hideModal}
        >
          <h1 className="text-red-500 font-bold flex items-center gap-4">
            <DeleteOutlined />
            Do you confirm the deletion of the employee with ID {active.index}?
          </h1>
        </Modal>
      </Default>
    </>
  );
};

export default Employees;
