import About from "../sections/headingPages/About";
import Heading from "../sections/headingPages/Heading";
import Special from "../sections/headingPages/Specials";
import Testimonials from "../sections/headingPages/Testimonials";

export default function HomePage(){
    return(

        <>
        <Heading/>
        <main>
            <Special/>
            <About/>
            <Testimonials/>
        </main>
        </>
    )
}

