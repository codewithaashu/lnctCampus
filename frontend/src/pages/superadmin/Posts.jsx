import PostContentBox from "@/components/dashboard/superadmin/PostContentBox";
import PostListBox from "@/components/dashboard/superadmin/PostListBox";
import { Card } from "@/components/ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const Posts = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <Card className={`rounded-md border w-11/12 h-full`}>
          <ResizablePanelGroup direction="horizontal" className="h-full w-full">
            <ResizablePanel minSize={30} defaultSize={35} maxSize={60}>
              <div className={`flex h-full items-center justify-center w-full`}>
                <PostListBox />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={65} minSize={40} maxSize={70}>
              <div className="grid h-full  justify-center w-full relative">
                <PostContentBox />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Card>
      </div>
    </>
  );
};

export default Posts;
