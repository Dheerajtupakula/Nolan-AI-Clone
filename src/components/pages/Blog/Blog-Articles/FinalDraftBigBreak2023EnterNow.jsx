import React from "react";
import "../blog-data.css";
import BlogBackgroundImgTitle from "./BlogBackgroundImgTitle";
import blogData from "../../../Data/blogData";
import BlogButton from "./BlogButton";

const FinalDraftBigBreak2023EnterNow = () => {
  return (
    <section className="blog-data">
      {" "}
      <BlogBackgroundImgTitle
        article_title={blogData[39].blog_title}
        article_data={blogData[39].blog_datetime}
      />
      <div className="blog-data-content">
          <p>
            Attention, aspiring screenwriters! The highly anticipated Final
            Draft Big Break 2023 contest is here, and it's time to showcase your
            talent and make your mark in the industry. Don't miss out on this
            incredible opportunity to have your screenplay recognized and
            rewarded.
            <a href="https://www.finaldraft.com/big-break-screenwriting-contest/?_gl=1*1cchd9w*_gcl_aw*R0NMLjE2ODYwMDA1NjUuQ2owS0NRandqX2FqQmhDcUFSSXNBQTM3czB3b3dtZXhBYmt1Zi1RSDBVMFVKdHl0OXhINWJfd3dDZzVEbldwYW1HRkxrVlhET3RFSng2WWFBa2lURUFMd193Y0I.*_gcl_au*MTkzNzA1MTk1OC4xNjg2MDAwNTYz*_ga*MjA4MDI2MTU2NC4xNjg2MDAwNTY0*_ga_W6F70R3YM1*MTY4NjAwMDU2My4xLjAuMTY4NjAwMDU2Ny41Ni4wLjA.">
              🚀ENTER CONTEST NOW!
            </a>
            🚀 Big Break is an esteemed competition that celebrates excellence
            in screenwriting and offers a platform for emerging writers to
            showcase their work. Whether you're a seasoned writer or just
            starting your journey, this contest is your chance to shine.
          </p>
          <p>
            By participating in Big Break 2023, you'll have the chance to win
            amazing prizes, including cash awards, industry recognition,
            mentorship opportunities, and more. Imagine the doors that could
            open for your career if your screenplay catches the attention of
            industry professionals!
          </p>
          <p>
            To enter the contest, simply visit the official Big Break website
            and submit your screenplay before the deadline. Take advantage of
            this chance to get your work in front of influential judges and
            industry insiders who are eager to discover the next big talent.
          </p>
          <p>
            <a href="https://www.finaldraft.com/big-break-screenwriting-contest/?_gl=1*1cchd9w*_gcl_aw*R0NMLjE2ODYwMDA1NjUuQ2owS0NRandqX2FqQmhDcUFSSXNBQTM3czB3b3dtZXhBYmt1Zi1RSDBVMFVKdHl0OXhINWJfd3dDZzVEbldwYW1HRkxrVlhET3RFSng2WWFBa2lURUFMd193Y0I.*_gcl_au*MTkzNzA1MTk1OC4xNjg2MDAwNTYz*_ga*MjA4MDI2MTU2NC4xNjg2MDAwNTY0*_ga_W6F70R3YM1*MTY4NjAwMDU2My4xLjAuMTY4NjAwMDU2Ny41Ni4wLjA.">
              ENTER CONTEST NOW
            </a>
            .
          </p>
          <p>
            Remember, this is your moment to make your mark in the world of
            screenwriting. Don't wait any longer – enter the Final Draft
            #BigBreak 2023 contest today and let your creativity soar.!
            #FinalDraft #BigBreak #screenwritingcontest
          </p>
        
      </div>
      <BlogButton />
    </section>
  );
};

export default FinalDraftBigBreak2023EnterNow;
