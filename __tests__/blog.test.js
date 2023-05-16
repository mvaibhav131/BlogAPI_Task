const request = require('supertest');
const app = require('express')();

describe('Blog Test Cases', function() {
    it('Get all blogs', function(done) {
      request('localhost:5000')
        .get('/blogs')
        .end((err, res) => {
            if(err){
                console.log(err);
            }
            expect(res.statusCode).toEqual(200);
            done();
        });
    });

    const NewBlog={
        "title":"my Blogs",
        "description":"creating simple blog api to add new bolg",
        "image": "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="
    }

    it('Create new Blog', function(done) {
        request('localhost:5000')
          .post('/blogs/add')
          .set('Content-type', 'application/json')
          .send(NewBlog)
          .end((err, res) => {
              if(err){
                  console.log(err);
              }
              expect(res.statusCode).toEqual(200);
              expect(res.ok).toEqual(true);
              done();
          });
       });

       const invalidBlogId="6463b07e9e86514dd74a2dbf"
       it('Get blogs by InvalidId', function(done) {
        request('localhost:5000')
          .get(`/blogs/${invalidBlogId}`)
          .end((err, res) => {
              if(err){
                  console.log(err);
              }
              expect(res.statusCode).toEqual(404);
              expect(res.notFound).toEqual(true);
              expect(res.body.messaage).toEqual("No Blog Found")
              done();
          });
      });

      const UpdateBlog={
        "title":"my Blogs",
        "description":"creats simple blog api to add new bolg",
        "image": "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="
    }
    const updateId="6463b07e9e86514dd74a2dbf"

    it('Update Blog', function(done) {
        request('localhost:5000')
          .put(`/blogs/update/${updateId}`)
          .set('Content-type', 'application/json')
          .send(UpdateBlog)
          .end((err, res) => {
              if(err){
                  console.log(err);
              }
              expect(res.statusCode).toEqual(500);
              done();
          });
       });

  });