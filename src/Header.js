import Name from './Name';
import Card from './Card';
function Header(){
    
  const card=[
      {
          title:"Web devlopment",
          sub_title:"Javascript",
          desc:"JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web.",
          image:"https://4.bp.blogspot.com/-s2EhTt57oeU/XHtQtO1QNLI/AAAAAAAANW8/KYkPQEZUyocSpA2RzqCcVt31imXPi63RACLcBGAs/s1600/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg",
          button: "Enroll Now"
      },
      {
        title:"Hacking",
        sub_title:"C Programming",
        desc:"Coined as the “Mother of all programming languages,” is also a critical language in the Hacking community.",
        image: "https://hownot2code.files.wordpress.com/2016/11/c-course.jpg?w=676",
        button: "Enroll Now"
    },
    {
        title:"Full-Stack",
        sub_title:"Express-Js",
        desc:"Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License.",
        image: "https://miro.medium.com/max/1400/1*x9xgemgwoJ6ftvdwwGA6EA.png",
        button: "Enroll Now"
    },
    {
        title:"Front-end Devloper",
        sub_title:"React-Js",
        desc:"React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces or UI components.",
        image: "https://mochikit.com/wp-content/uploads/2019/01/React_logo-300x169.png",
        button: "Enroll Now"
    },
    {
        title:"Android App Development",
        sub_title:"Kotlin",
        desc:" Kotlin is a cross-platform programming language that may be used as an alternative to Java for Android App Development.",
        image: "https://5.imimg.com/data5/DW/LE/FK/SELLER-8927881/kotlin-online-training-500x500.JPG",
        button: "Enroll Now"
    }
  ]
    return (
        <div>
            <h1 style={{marginLeft:"15%"}}>All Courses</h1>
            <div className='container'>
        
            <Name/>
            {
                
                card.map((card,index)=>(

                    <Card key={index} title={card.title} sub_title={card.sub_title}  desc={card.desc} image={card.image} button={card.button} />
                ))
            }
            </div>
        </div>

    )
}

export default Header;