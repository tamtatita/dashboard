import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

import {
  Badge,
  Button,
  Dropdown,
  Input,
  Modal,
  PageHeader,
  Select,
  Space,
  Table,
  Tag,
} from "antd";
import Default from "../../DefaultLayout/Default";
import { useEffect, useState } from "react";
import axios from "axios";
import { API as url } from "../../../API";
import TableComponent from "../../Global/TableComponent";
import useColumnSearch from "../../hooks/getColumnProps";

const Employees = () => {
  const [dataEmployees, setDataEmployees] = useState([]);
  const [active, setActive] = useState({
    edit: false,
    remove: false,
    index: 0,
  });
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

  const handleEdit = (id) => {
    setActive({ ...active, edit: true, remove: false, index: id });
  };

  const handleRemove = (id) => {
    setActive({ ...active, edit: false, remove: true, index: id });
  };
  const hideModal = () => {
    setActive({ ...active, edit: false, remove: false });
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
      width: "10%",
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
      width: "10%",
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

          <Button
            onClick={() => handleRemove(record.employeeNumber)}
            icon={<DeleteOutlined />}
            type="primary"
            danger
          />
        </Space>
      ),
    },
  ];

  const configFormAdd = [
    {
      code: "employeeNumber",
      name: "Employee Number",
      type: "input",
      disabled: true,
    },
    { code: "lastName", name: "Last Name", type: "input" },
    { code: "firstName", name: "First Name", type: "input" },
    { code: "extension", name: "Extension", type: "input" },
    { code: "email", name: "Email", type: "input" },
    {
      code: "officeCode",
      name: "Office Code",
      type: "select",
      render: true,
      dataRender: { defaultValue: 1, data: unique.office, sort: "number" },
    },
    { code: "reportsTo", name: "Report To", type: "input" },
    {
      code: "jobTitle",
      name: "Job Title",
      type: "select",
      render: true,
      dataRender: { defaultValue: -1, data: unique.jobTitle, sort: "char" },
    },
  ];
  return (
    <>
      <Default>
        <PageHeader title="Manager Employees" />
        <Space className="mb-4">
          <Button icon={<PlusCircleOutlined />} type="primary" size="large">
            Add Emp
          </Button>
        </Space>
        <TableComponent dataSource={dataEmployees} columns={columnTable} />

        {/* <ModalComponent
          isAddNew={false}
          config={configFormAdd}
          onCancel={hideModal}
          onOK={hideModal}
          title={"Edit Employee"}
          IDNumber={"EmployeeNumber"}
          IDIndex={active.index}
          data={dataEmployees.length > 0 && dataEmployees}
          visible={active.edit}
        /> */}

        <Modal
          title="Remove Employee"
          visible={active.remove}
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

// const ModalComponent = ({
//   isAddNew,
//   config,
//   title,
//   data,
//   IDNumber,
//   IDIndex,
//   visible,
//   onOK,
//   onCancel,
// }) => {
//   return (
//     <Modal title={title} visible={visible} onOk={onOK} onCancel={onCancel}>
//       <div>
//         <div className="h-[50vh] overflow-y-scroll">
//           {data
//             ?.filter((item) => item.IDNumber === IDIndex)
//             .map((item) => (
//               <div className="">
//                 {config.map((field) => {
//                   if (field.type == "input") {
//                     return (
//                       <div className={field.code}>
//                         <Input
//                           disabled={field.disabled}
//                           value={item.field.code}
//                         />
//                       </div>
//                     );
//                   }
//                 })}

//                 <div className="">
//                   <h1>Office Code</h1>
//                   <Select
//                     defaultValue={1}
//                     style={{ width: "100%" }}
//                     options={unique.office
//                       .sort(function (a, b) {
//                         return a - b;
//                       })
//                       .map((item) => ({
//                         value: item,
//                         label: item,
//                       }))}
//                   />
//                 </div>

//                 <div className="">
//                   <h1>reportsTo</h1>
//                   <Input value={item.reportsTo} />
//                 </div>

//                 <div className="">
//                   <h1>Job</h1>
//                   <Select
//                     defaultValue={unique.jobTitle[-1]}
//                     style={{ width: "100%" }}
//                     options={unique.jobTitle.map((item) => ({
//                       value: item === "President" ? item : item,
//                       label: item,
//                       disabled: item === "President" ? true : false,
//                     }))}
//                   />
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </Modal>
//   );
// };
export default Employees;
