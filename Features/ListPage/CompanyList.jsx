import { Layout, Table, Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const { Content } = Layout;


// companyName: "Tech Solutions";
// createdBy: "John Doe";
// deposit: true;
// employabilityScore: "85";
// expiresIn: "2024-12-31";
// gapInEducation: false;
// genderPreference: "Any";
// graduateMinPercentage: "70";
// interviewDate: "2024-09-20";
// interviewRound: "Technical, HR";
// interviewRoundDetails: "First technical round, followed by HR interview.";
// interviewRounds: "3";
// isTechnical: true;
// jobDescriptionLink: "https://example.com/job-description";
// jobId: "JOB12345";
// jobLocation: "Bangalore, India";
// jobRole: "Full Stack Developer";
// jobTitle: "Software Engineer";
// modeOfInterview: "Online";
const CompanyList = () => {
  const navigate = useNavigate();
  const data = useSelector((state)=>{ return state.jobs.jobs})
  console.log("data got is  : "  , data) ;

  const columns = [
    {
      title: "Name",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "Address",
      dataIndex: "jobLocation",
      key: "jobLocation",
    },
    {
      title: "Name",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "Address",
      dataIndex: "jobLocation",
      key: "jobLocation",
    },
    {
      title: "Name",
      dataIndex: "interviewDate",
      key: "interviewDate",
    },
    {
      title: "Address",
      dataIndex: "graduateMinPercentage",
      key: "graduateMinPercentage",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ padding: "24px", margin: 0 }}>
        <Card
          title="jobs List"
          extra={
            <Button type="primary" onClick={() => navigate("/create-job")}>
              Create jobs
            </Button>
          }
        >
          <Table dataSource={data} columns={columns} />
        </Card>
      </Content>
    </Layout>
  );
};

export default CompanyList;
