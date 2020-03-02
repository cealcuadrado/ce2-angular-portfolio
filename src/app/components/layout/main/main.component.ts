import { Component, OnInit} from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';
import { Blog } from 'src/app/interfaces/blog';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  blogs: Blog[];
  tiles: any[];
  cols: number;
  rowHeight: string;
  showBreak: boolean;

  constructor(
    private blogsService: BlogsService,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.blogs = this.blogsService.getBlogs();

    this.tiles = [];

    this.blogs.forEach(e => {
      this.tiles.push({ cols: 1, rows: 1, blog: e });
    });

    const layoutChanges = this.breakpointObserver.observe(['(max-width:991px)']);

    layoutChanges.subscribe(result => {
      this.cols = (result.matches) ? 1 : 3;
      this.rowHeight = (result.matches) ? '150px' : '300px';
      this.showBreak = !result.matches;
    });
  }
}
