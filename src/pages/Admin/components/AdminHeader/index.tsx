import Header from "@/components/Header";

const adminInfo = {
  username: "Duong",
  role: "Admin",
  avt: "/static/images/avatar/1.jpg",
};

const AdminHeader = ({ name }: { name: string }) => {
  return <Header info={adminInfo} name={name} />;
};

export default AdminHeader;
