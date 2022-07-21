import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

 categories=[
   {
     cid:23,
     title: 'Programming',
   },
   {
    cid:23,
    title: 'Programming',
   },
 ]
  quizData={
    title:'',
    descrption:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:true,
    category: {
      cid:'',
    },

  };

  constructor(private _cat:CategoryService,private _snack:MatSnackBar,private _quiz:QuizService) { }

  ngOnInit(): void {
     this._cat.categories().subscribe(
       (data: any) => {
         //categories Load
         this.categories = data;
         console.log(this.categories);
       },
       (error) =>{
         console.log(error);
         Swal.fire('Error!!', 'error in loading data from server','error');
       }
     )
  }

  //
  addQuiz(){
    if(this.quizData.title.trim()=='' || this.quizData.title.trim==null){
      this._snack.open("title Required !!", '', {
        duration: 3000,
      });
      return;
    }

    //validation...

    //call server
    console.log(this.quizData);
    this._quiz.addQuiz(this.quizData).subscribe(
      (data)=>{
          Swal.fire('Success','quiz is added','success');
          this.quizData={
            title:'',
            descrption:'',
            maxMarks:'',
            numberOfQuestions:'',
            active:true,
            category: {
              cid:'',
            },
        
          };
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error!','Something went wrong. Please try later.','error');
      }
    );
  }

}
