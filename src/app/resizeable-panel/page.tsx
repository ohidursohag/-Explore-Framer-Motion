import DemoWithControls from "@/components/resizeablePanel/DemoWithControls";
import MyResizeablePanel from "@/components/resizeablePanel/MyResizeablePanel";
import ResizeableContent from "@/components/resizeablePanel/ResizeablePanel";

const ResizeablePanels = () => {

  return (
    <div className="min-h-screen  flex justify-center items-center ">
       {/* <DemoWithControls/> */}
       {/* <ResizeableContent/> */}
       <MyResizeablePanel/>
    </div>
  )
};

export default ResizeablePanels;
