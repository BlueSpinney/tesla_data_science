import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import durationvViews from './durationVsViews.png';
import defaultimg from './default.jpg'
import codeimg from './code.png'
import codeimg2 from './code2.png'
import DurVsLikes from './DurVsLikes.png'
import videos_without_tesla_tag from './teslaTag.png'
import resultsBackground from './SQL_querry.png'

const root = ReactDOM.createRoot(document.getElementById('root'));


document.body.style = 'background: #23272e';

const subsites = ["Result","Code","Q&A"]
let point = undefined

class SubSite extends React.PureComponent{
    

    createQnA = (Q,A) => {
        return(
            <>  
                <div class = "Question">
                    <h2>{Q}</h2>
                    <p>{A}</p>
                </div>
            </>
        );
    }

    create_code_desc = (header,text,x) =>{

        return(
            <>
                <div class = "into" style={{"top" : "70","left" : "15%"}}>
                    <h2>{header}</h2>
                </div>

                <div class = "code_text">
                    <p>{text}</p>
                </div>
            </>
        );
    }

    renderDataPoint = (head,txt,img,img_width,img_height) =>{
        if (img === undefined){
            img = defaultimg
        }
        return(
            <>
                <div class = "Datapoint">
                    <h2>{head}</h2>
                    <p>{txt}</p>
                    <img class = "Datapointimg" width={img_width} height = {img_height} src = {img}></img>
                    <p>Data gatherd through the Youtube Data API v3</p>


                </div>
            </>
        );
    }

    exit_button = () =>{
        return(
            <button class = "return_to_menu" onClick={() => {document.body.style = 'background: #23272e';root.render(<Base/>)}}>{"<-"}</button>
        );
    }
    nextpagebutton = () =>{
        if (this.props.point != 2){
            return(
                
                <div style={{"position":"absolute","right":"5.1%"}}>
                    <button class = "return_to_menu_" onClick={() => {document.body.style = 'background: #23272e'; root.render(<SubSite point = {this.props.point + 1}/>)}}>{"->"}</button>
                </div>
            );
        }else{
            return(
                <></>
            );
        }
    }

    render(){
        if (subsites[this.props.point] === "Q&A"){
            return(
                <>
                    <div class = 'qna_background'>
                    </div>
                    <div class = ''>
                        <img></img>
                        <img></img>
                    </div>
                    <div class = "center">
                        <h1>Q&A</h1>
                    </div>

                    <div style={{"position":"absolute","top":"15%","left": "20%"}}>
                        {this.createQnA("Why did you use our youtube channel for the Analasys ?","I used your youtube channel and Not, say, your sales, because I think you don't do that much work on analysing the Performance of your Youtube channel. So It would be more Useful for you, if I did an analasys on your youtube channel. Then on your sales data because, you propbably allready have next to all data on that subjekt (thanks to the analasys you have allready done in your company)")}
                    </div>
                    <div style={{"position":"absolute","top":"52%","left": "20%"}}>
                        {this.createQnA("Why did you gather the data yourself ?","I gatherd the data myself; wich led to me having to do alot of extra work. Because, I learned alot about the Youtube data API in the proces. And scince I enjoy learning alot, and I think it would impress you more I went through with collecting the data myself")}
                    </div>
                    <div style={{"position":"absolute","top":"85%","left": "20%"}}>
                        {this.createQnA("Why did you chosse Tesla for your internship","I chose tesla for my internship, Because I Like your Values and company culture alot. And because I think (and I'm not just saying that, I Really mean it) That Tesla makes the best cars on The market. Including my favorite car the Tesla model S and it would be an actuall Dream come true if I could see how the software for your cars is made; especialy the auto pilot ")}
                    </div>
                    {this.nextpagebutton()}
                    {this.exit_button()}
                </>
            );
        }
        else if (subsites[this.props.point] === "Code"){
            return(
                <>
                    <div class = "img_holder">
                        <img src = {codeimg} width = {"100%"} height = {"200%"}></img>
                        <img src = {codeimg2} width = {"100%"} height = {"200%"}></img>
                    </div>
                    <div class = "code_content">
                        <h1>The Code</h1>
                    </div>

                    <div style = {{"position":"absolute","top":"30%","left":"15%"}}>
                        {this.create_code_desc('Overview','Most of the code in this Projekt was written in SQL and python SQL for analasys and python for data gathering I wrote 3 Programs for this Projekt the python program "gather.py" that uses the Youtube data API to fetch the 50 newest videos from your youtube channel an SQL querry and this website that was written with the React JS libary/framework and you can see portions of the Programs written in the background of this page ')}
                    </div>
                    <div style = {{"position":"absolute","top":"70%","left":"15%"}}>
                        {this.create_code_desc("Data hunting with python","The python code was a necesaryty because I wasn't able to find any data sets on your youtube channel. So I used the Youtbe data API for python to do it myself (you can view the full code for the gathering of the data on my github profile) the data points I setelld for were largly things that I thought might coralate to the succses of a vieo (succses being messured by views) like duration title and tags that my python program gatherd for me and than saved to a CSV file so I could use SQL to analyse it in the next step")}
                    </div>
                    <div style = {{"position":"absolute","top":"110%","left":"15%"}}>
                        {this.create_code_desc("Analasys with SQL","Analysing the data with SQL was probably the most fun part of this whole projekt because I am a very curios Person and a Cleand data set thrown togher with an SQL console is beasicly haven for any Person that is even remotly intrested in data. In the analasys projekt I manly tested for coralations and relationships between diffrent data points like how video duration compares to video Views or if Videos with more Comments have a better or worse like to dislike ratio I also, of Course looked for Causations but because the youtube alogrythem is very complex I only managed to find fery few meaningful data points that seem to be corelated to video succses wich kind of made me sad :(")}
                    </div>  
                    <div style = {{"position":"absolute","top":"150%","left":"15%"}}>
                        {this.create_code_desc("Building this website with React","Building this website was a very fun proces mainly because React makes it fairly easy to design a frontend with Java script and css and I dont really need a backend because you mr.tesla person will probably be the only one who gets to see it I hope you enjoyed it so far. I decided to use React and java script Because even thoug there are alot and I mean ALOT of options if you want to build a website nowerdays (even without coding) I think the React franework/Libary is the best for building small lightweight websites that are great for school projekts or case studys like the one im doing right now ")}
                    </div>       
                                            
                    {this.exit_button()}
                    {this.nextpagebutton()}
                </>
            );
        }
        else{
            document.body.style = 'background: rgb(43, 43, 43)';
            return(
                <>
                    <div class = "res_b">
                        <img src = {resultsBackground} height = {"50%"} width = {"100%"}></img>
                        <img src = {resultsBackground} height = {"60%"} width = {"100%"}></img>
                    </div>

                    <div class = "center">
                        <h1>The results</h1>
                    </div>

                    <div class = "center">
                        {this.renderDataPoint('Duration vs video Views','The analasys showed that the best video length is round about 85.0370 Seconds (not acounting for the anaual meeting of share holders with the anaual meting of share holders the aveage would be 238.5714 Seconds I dident include it because it is an outliar) and scince video views are direktly correlated with comments and likes that means the best kind of videos you should make are most likly the shortest ones',durationvViews,"51%","35%")}
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <div class = "center">
                        {this.renderDataPoint("Duration vs Like ratio","Shorter videos seem to have a better like to view ratio thatn 'normal' videos that could be because shorter videos are less serius than the longer ones wich means that people are more likly to share them with friends that than are more likly to share the video with even more friends and so on that would also explain why shorter videos have more views than longer ones ",DurVsLikes,"50%","50%")}
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <div class = "center">
                        {this.renderDataPoint('Videos witout the word "Tesla"',"In the analays I saw something fairly intresting waht I say being that videos without the Word tesla in their tile seem to perform better than videos with tesla in the title I think taht is because people Think that the video is an ad when they see tesla in the Title and therefor dont clikc on it because who wants to spend thier time watching ads ? another reason could be taht videos without the word Tesla in them have generaly more creative title wich could motivate users to click on your videos",videos_without_tesla_tag,"60.5%","15%")}
                    </div>

                    {this.exit_button()}
                    {this.nextpagebutton()}
                </>
            );
        }
    }
}


class Base extends React.PureComponent{

    openSubSite = (siteName) => {
        root.render(<SubSite
            point = {siteName}
        />)
    }
    create_button = (title,command,design) =>{
        return (
            <div class = "center">
                <button class = {design} onClick={command}>{title}</button>
            </div>
        );
    }
    render(){
        return(
            <>
                {this.create_button("Result",() => this.openSubSite(0),"menu_button")}
                {this.create_button("Code",() => this.openSubSite(1),"menu_button")}
                {this.create_button("Q&A",() => this.openSubSite(2),"menu_button")}
            </>
        );
    }
}

root.render(<Base/>)
