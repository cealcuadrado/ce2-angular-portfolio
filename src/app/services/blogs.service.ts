import { Injectable } from '@angular/core';
import { Blog } from '../interfaces/blog';
import { BLOGS } from '../constants/blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  blogs: Blog[] = BLOGS;

  constructor() { }

  getBlogs(): Blog[] {
    return this.blogs;
  }
}
