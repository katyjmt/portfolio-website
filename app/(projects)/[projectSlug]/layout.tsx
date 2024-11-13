import ProjectNav from "../../components/ProjectNav";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ProjectNav />
      <div>{children}</div>
    </div>
  );
}