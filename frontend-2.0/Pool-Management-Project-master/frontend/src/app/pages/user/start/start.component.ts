import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  qid:any;
  questions:any;

  marksGot=0;
  coorectAnswer=0;
  attempted=0;
  isSubmit = false;

  timer: any;

  constructor(
    private locationSt:LocationStrategy,
    private _route: ActivatedRoute,
    private _question: QuestionsService
  ) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.qid = this._route.snapshot.params['qid'];
    this.loadQuestions();
  }
  loadQuestions() {
    this._question
      .getQuestionOfQuizForTest(this.qid)
      .subscribe(
        (data:any)=>{
          this.questions =data;
          this.timer = this.questions.length * 2 * 60 ;
          this.questions.forEach((q:any)=>{
              q.giveAsnwer = '';
          });
          this.startTimer();

        },(error)=>{
          console.log(error);
        }
      )
  }
  preventBackButton(){
    history.pushState(null, '', location.href);
    this.locationSt.onPopState(()=>{
      history.pushState(null, '', location.href);
    });
  }

  submitQuiz(){
    Swal.fire({
      title: 'Do you want to submit the quiz?',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      confirmButtonColor: '#95AD8D',
      icon:'info',
    }).then((e) => {
      /* Read more about isConfirmed, isDenied below */
      if (e.isConfirmed) {
          this.evalQuiz();

      } 
    })
  }

  startTimer(){
   let t = window.setInterval(()=>{
      if(this.timer<=0){
        this.evalQuiz();
        clearInterval(t);
      }else{
        this.timer--;
      }
    }, 1000)
  }


  getFormattedTime(){
    let mm = Math.floor(this.timer/60);
    let ss = this.timer-mm*60;
    return `${mm} min : ${ss} sec`
  }

  evalQuiz(){
         //calculate
         //call the serve to check questions
         this._question.evalQuiz(this.questions).subscribe(
           (data:any)=>{
             console.log(data); 
             this.marksGot=data.marksGot;
             this.coorectAnswer = data.correctAnswer;
             this.attempted = data.attempted;
             this.isSubmit=true;
           }
         )
        //  this.isSubmit = true;
        //  this.questions.forEach((q:any)=>{
        //    console.log("that's ur q" , q.giveAsnwer);          
        //    if(q.giveAsnwer==q.answer){
        //        this.coorectAnswer++;
        //        let marksSingle =  this.questions[0].quiz.maxMarks/this.questions.length;
        //        this.marksGot += marksSingle;
        //      }
 
        //      if(q.giveAsnwer.trim() != ''){
        //        this.attempted++;
        //      }
   
        //  });
  }
}
