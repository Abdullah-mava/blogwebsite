import Navbar from '@/app/Components/Navbar';
import Home from '@/app/Components/Home';
import Blogs from '@/app/Components/Blogs';
import About from "@/app/Components/About";
export default function main() {
  return (
    <div>
      <Navbar />
     <Home/>
     <Blogs/>
     <About/>
     </div>
  );
}
