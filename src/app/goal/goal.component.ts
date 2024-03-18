import { Component, OnInit, inject } from '@angular/core';
import { GoalService } from '../goal.service';
import { MatTableDataSource } from '@angular/material/table';
import { Goal } from '../Models/Goal';

@Component({
  selector: 'mg-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit{

  private readonly goalService=inject(GoalService);
  dataSource = new MatTableDataSource<Goal>();

  ngOnInit(): void {
    this.goalService.getAllGoals().subscribe((data) => {
      this.dataSource.data = data as Goal[];
      console.log(this.dataSource.data);
    });
  }

}
