import { useEffect, useState } from "react";
import { Button, Collapse } from "react-bootstrap";

import Link from "next/link"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListIcon from '@mui/icons-material/List';
import axios from "axios";
import { useRouter } from "next/router";
export default function dropdownSandwitch() {
    const [open, setOpen] = useState(false);
  const [nextPage, setNextPage] = useState(false);
  const [pages, setPages] = useState([]);
  const [nextLevel, setNextLevel] = useState([]);
  const [threeLevel, setthreeLevel] = useState(false);
  const [news, setNews] = useState([]);
  const [activeState, setActiveState] = useState("");
  const [activeStateLevelTree, setActiveStateLevelTree] = useState("");
  const {locale}=useRouter()
  useEffect(() => {
    // axios({
    //   method: "get",
    //   url: `${process.env.apiUrl}jobs?langCode=${locale}`,

    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // }).then((res) => {
    //   setJops(res.data.rows);
    // });
    // axios({
    //   method: "get",
    //   url: `${process.env.apiUrl}services?langCode=${locale}`,

    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // }).then((res) => {
    //   setBlogs(res.data.rows);
    // });
    axios({
      method: "get",
      url: `${process.env.apiUrl}pages?langCode=${locale}`,

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      setPages(res.data.rows);
      console.log(res.data.rows);
    });
    axios({
      method: "get",
      url: `${process.env.apiUrl}news?langCode=${locale}`,

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      setNews(res.data.rows);
    });
    // axios({
    //   method: "get",
    //   url: `${process.env.apiUrl}realestates?langCode=${locale}`,

    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // }).then((res) => {
    //   setRealStates(res.data.rows);
    // });
    // getData(`news?langCode=${locale}`).then((res) => {
    //   setNews(res.rows);
    // });
  }, []);
  console.log(nextPage);
  console.log(threeLevel);
  console.log(activeState);
console.log(activeStateLevelTree);
  return (
    <div className='dropdown_sandwitch'>
      <Accordion>
        <AccordionSummary
       
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
       <ListIcon /> 
        </AccordionSummary>
        <AccordionDetails>
          {nextPage&&!threeLevel?
<>
<div >
<p className="Previous" onClick={()=>setNextPage(false)}>  
   <ChevronLeftIcon />      Go To Previous</p>
{activeState==="About"&&
<>
<p onClick={()=>{
  setthreeLevel(true)
  setActiveStateLevelTree("About us ")
}} className="d-flex justify-content-between px-3" >About us <ChevronRightIcon /> </p>
<p onClick={()=>{
  setthreeLevel(true)
  setActiveStateLevelTree("Services")
}} className="d-flex justify-content-between px-3">Services <ChevronRightIcon /></p>
<p onClick={()=>{
  setthreeLevel(true)
  setActiveStateLevelTree("Resources")
}} className="d-flex justify-content-between px-3">Human Resources <ChevronRightIcon /></p>
</>
}

{activeState==="Properties"&&
<>
<p onClick={()=>{
  setthreeLevel(true)
  setActiveStateLevelTree("News")

}} className="d-flex justify-content-between px-3" >News <ChevronRightIcon /></p>
<p onClick={()=>{
  setthreeLevel(true)
  setActiveStateLevelTree("Artiacl")

}} className="d-flex justify-content-between px-3">Artiacls <ChevronRightIcon /></p>

</>
}
{activeState==="Citizenship"&&
<>
<p className="d-flex justify-content-between px-3" >News <ChevronRightIcon /></p>
<p  className="d-flex justify-content-between px-3">Artiacls <ChevronRightIcon /></p>

</>
}
{activeState==="Blog"&&
<>
<p onClick={()=>{
  setthreeLevel(true)
  setActiveStateLevelTree("News")
}} className="d-flex justify-content-between px-3" >News <ChevronRightIcon /></p>
<p onClick={()=>{
  setthreeLevel(true)
  setActiveStateLevelTree("Artiacl")
}} className="d-flex justify-content-between px-3">Artiacls <ChevronRightIcon /></p>

</>
}
</div>
</>

:nextPage&&threeLevel?
<div >
  <p className="Previous" onClick={()=>setthreeLevel(false)}> <ChevronLeftIcon />      Go To Previous</p>
{activeStateLevelTree==="About us "&&
<>
<p  className="d-flex justify-content-between px-3" ><Link href="/AboutUs">Who We Are </Link></p>
<p  className="d-flex justify-content-between px-3"><Link href="/testimonial">shamdin Testimonials</Link> </p>
<p className="d-flex justify-content-between px-3"><Link href="/privacy">Privacy Policy</Link></p>
<p className="d-flex justify-content-between px-3"><Link href="/terms">Terms of Use</Link></p>
<p className="d-flex justify-content-between px-3">shamdin News</p>
</>
}

{activeStateLevelTree==="Services"&&
<>
<p  className="d-flex justify-content-between px-3" >News</p>
<p className="d-flex justify-content-between px-3">Artiacls</p>
</>
}
{activeStateLevelTree==="Resources"&&
<>
<p  className="d-flex justify-content-between px-3" ><Link href="free-jops">Job Vacancies</Link></p>
<p  className="d-flex justify-content-between px-3">Artiacls</p>

</>
}
{activeStateLevelTree==="Blog"&&
<>
<p  className="d-flex justify-content-between px-3" >News</p>
<p className="d-flex justify-content-between px-3">Artiacls</p>

</>
}
{activeStateLevelTree==="News"&&
<>
<p  className="d-flex justify-content-between px-3" >News</p>
<p className="d-flex justify-content-between px-3">Artiacls</p>

</>
}
{activeStateLevelTree==="Artiacl"&&
<>
<p  className="d-flex justify-content-between px-3" >News</p>
<p className="d-flex justify-content-between px-3">Artiacls</p>

</>
}
</div>
:
<>
   <ul >

<li class="nav-item">
<Link class="nav-link text-capitalize"href="/" >home</Link>
</li>
<li class="nav-item" 
onClick={()=>{
  setNextPage(true)
  setActiveState("About")
}}
>
<Link class="nav-link text-capitalize"href="/"><>About shamdin  <ChevronRightIcon /></></Link>

</li>
<li class="nav-item"
onClick={()=>{
  setNextPage(true)
  setActiveState("Properties")

}}
>
<Link class="nav-link text-capitalize"href="/" ><>Turkey Properties  <ChevronRightIcon /></></Link>


</li>
<li class="nav-item"
onClick={()=>{
  setNextPage(true)
  setActiveState("Citizenship")
}}
><Link class="nav-link text-capitalize"href="/" ><>Turkish Citizenship <ChevronRightIcon /></></Link>


</li>
<li class="nav-item">
<Link class="nav-link text-capitalize"href="/" >Resale</Link>
</li>

<li class="nav-item"
onClick={()=>{
  setNextPage(true)
  setActiveState("Blog")

}}
><Link class="nav-link text-capitalize"href="/" ><>Blog <ChevronRightIcon /></></Link>


</li>
<li class="nav-item">
<Link class="nav-link text-capitalize"href="/" >shamdin Channel</Link>
</li>
<li class="nav-item">
<Link class="nav-link text-capitalize"href="/" >Faq</Link>
</li>
<li class="nav-item">
<Link class="nav-link text-capitalize"href="/" >Contact us</Link>
</li>

</ul>

</>
}
          
        </AccordionDetails>
      </Accordion>
  
 

            {/* <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="bg-transparent dropdown_sandwitch"
      >
    <MenuIcon  />
      </Button>  
      <Collapse in={open}>
      {nextPage&&!threeLevel?
<>
<div id="example-collapse-text">
<div className="navbar-nav">
<p className="Previous" onClick={()=>setNextPage(false)}>  
   <ChevronLeftIcon />      Go To Previous</p>
{activeState==="About"&&
<>
<p onClick={()=>{
  setthreeLevel(true)
  setActiveStateLevelTree("About us ")
}} className="d-flex justify-content-between px-3" >About us <ChevronRightIcon /> </p>
<p onClick={()=>{
  setthreeLevel(true)
  setActiveStateLevelTree("Services")
}} className="d-flex justify-content-between px-3">Services <ChevronRightIcon /></p>
<p onClick={()=>{
  setthreeLevel(true)
  setActiveStateLevelTree("Resources")
}} className="d-flex justify-content-between px-3">Human Resources <ChevronRightIcon /></p>
</>
}

{activeState==="Properties"&&
<>
<p onClick={()=>{
  setthreeLevel(true)
  setActiveStateLevelTree("News")

}} className="d-flex justify-content-between px-3" >News <ChevronRightIcon /></p>
<p onClick={()=>{
  setthreeLevel(true)
  setActiveStateLevelTree("Artiacl")

}} className="d-flex justify-content-between px-3">Artiacls <ChevronRightIcon /></p>

</>
}
{activeState==="Citizenship"&&
<>
<p className="d-flex justify-content-between px-3" >News <ChevronRightIcon /></p>
<p  className="d-flex justify-content-between px-3">Artiacls <ChevronRightIcon /></p>

</>
}
{activeState==="Blog"&&
<>
<p onClick={()=>{
  setthreeLevel(true)
  setActiveStateLevelTree("News")
}} className="d-flex justify-content-between px-3" >News <ChevronRightIcon /></p>
<p onClick={()=>{
  setthreeLevel(true)
  setActiveStateLevelTree("Artiacl")
}} className="d-flex justify-content-between px-3">Artiacls <ChevronRightIcon /></p>

</>
}
</div>
</div>
</>

:nextPage&&threeLevel?
<div id="example-collapse-text">
<div className="navbar-nav">
  <p className="Previous" onClick={()=>setthreeLevel(false)}> <ChevronLeftIcon />      Go To Previous</p>
{activeStateLevelTree==="About us "&&
<>
<p  className="d-flex justify-content-between px-3" ><Link href="/AboutUs">Who We Are </Link></p>
<p  className="d-flex justify-content-between px-3"><Link href="/testimonial">shamdin Testimonials</Link> </p>
<p className="d-flex justify-content-between px-3"><Link href="/privacy">Privacy Policy</Link></p>
<p className="d-flex justify-content-between px-3"><Link href="/terms">Terms of Use</Link></p>
<p className="d-flex justify-content-between px-3">shamdin News</p>
</>
}

{activeStateLevelTree==="Services"&&
<>
<p  className="d-flex justify-content-between px-3" >News</p>
<p className="d-flex justify-content-between px-3">Artiacls</p>
</>
}
{activeStateLevelTree==="Resources"&&
<>
<p  className="d-flex justify-content-between px-3" >News</p>
<p  className="d-flex justify-content-between px-3">Artiacls</p>

</>
}
{activeStateLevelTree==="Blog"&&
<>
<p  className="d-flex justify-content-between px-3" >News</p>
<p className="d-flex justify-content-between px-3">Artiacls</p>

</>
}
{activeStateLevelTree==="News"&&
<>
<p  className="d-flex justify-content-between px-3" >News</p>
<p className="d-flex justify-content-between px-3">Artiacls</p>

</>
}
{activeStateLevelTree==="Artiacl"&&
<>
<p  className="d-flex justify-content-between px-3" >News</p>
<p className="d-flex justify-content-between px-3">Artiacls</p>

</>
}
</div>
</div>
:
<>
  <div id="example-collapse-text">
   <ul class="navbar-nav">

<li class="nav-item">
<Link class="nav-link text-capitalize"href="/" >home</Link>
</li>
<li class="nav-item" 
onClick={()=>{
  setNextPage(true)
  setActiveState("About")
}}
>
<Link class="nav-link text-capitalize"href="/"><>About shamdin  <ChevronRightIcon /></></Link>

</li>
<li class="nav-item"
onClick={()=>{
  setNextPage(true)
  setActiveState("Properties")

}}
>
<Link class="nav-link text-capitalize"href="/" ><>Turkey Properties  <ChevronRightIcon /></></Link>


</li>
<li class="nav-item"
onClick={()=>{
  setNextPage(true)
  setActiveState("Citizenship")
}}
><Link class="nav-link text-capitalize"href="/" ><>Turkish Citizenship <ChevronRightIcon /></></Link>


</li>
<li class="nav-item">
<Link class="nav-link text-capitalize"href="/" >Resale</Link>
</li>

<li class="nav-item"
onClick={()=>{
  setNextPage(true)
  setActiveState("Blog")

}}
><Link class="nav-link text-capitalize"href="/" ><>Blog <ChevronRightIcon /></></Link>


</li>
<li class="nav-item">
<Link class="nav-link text-capitalize"href="/" >shamdin Channel</Link>
</li>
<li class="nav-item">
<Link class="nav-link text-capitalize"href="/" >Faq</Link>
</li>
<li class="nav-item">
<Link class="nav-link text-capitalize"href="/" >Contact us</Link>
</li>

</ul>
   </div>

</>
}

      </Collapse> */}
    </div>

  )
}
