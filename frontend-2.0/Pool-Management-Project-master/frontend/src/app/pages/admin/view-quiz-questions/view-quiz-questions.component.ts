import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

  qId=0;
  qTitle='';
  questions =[
    {
      quesId: 19,
      content: "What is Java Programming?",
      image: "java.png",
      option1: "OOPS",
      option2: "Function",
      option3: "Coffee",
      option4: "Collection",
      answer: "OOPS",
      quiz: {
          qId: 18,
          title: "Java Basics",
          description: "this quiz contains questions of Basics core java and oops",
          maxMarks: "300",
          numberOfQuestions: "30",
          active: true,
          category: {
              cid: 15,
              title: "Programming languages",
              description: "This quiz category contains quizzes related to programming languages"
          }
      }
  },
  ];
  constructor(
    private _router:ActivatedRoute,
    private _question:QuestionsService,
    private _snack:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.qId = this._router.snapshot.params['qid'];
    this.qTitle = this._router.snapshot.params['title'];
    this._question.getQuestionsOfQuiz(this.qId).subscribe(
      (data:any)=>{
        this.questions = data;
        console.log('heeey' ,this.questions);
      },
      (error)=>{
        console.log(error);
      }
    )
    console.log(this.qId);
    console.log(this.qTitle);
  }
  
  //delete Question
  public deleteQuestion(qid:any){
    Swal.fire({
      icon:'info',
      iconColor:'#95AD8D',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      confirmButtonColor: '#95AD8D',
      title: 'Are you sure, want to delete this question?'
    }).then((result)=>{
          if(result.isConfirmed){
            //confirmed
            this._question.deleteQuestion(qid).subscribe(
              (data)=>{
                this._snack.open('Question Deleted','',{
                  duration: 3000,
                });
                this.questions = this.questions.filter((q)=>q.quesId != qid);
            },
            (error)=>{
              this._snack.open('Error in deleting questions','',{
                duration: 3000,
              });
              console.log(error)
            });
          }
    });
  }

}
