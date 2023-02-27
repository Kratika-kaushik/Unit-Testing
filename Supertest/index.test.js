const request = require('supertest');
const app = require("./index")


// xdescribe('Todos endpoint', () => {
// 	it.skip('should return a 200 status code', async () => {
// 		const response = await request(baseUrl)
// 			.get('todos/1');

// 		expect(response.statusCode).toBe(200);
// 	});
//     it.skip('should have the correct response headers', async () => {
// 		const response = await request(baseUrl)
// 			.get('todos')
// 			.set('Accept', 'application/json');

// 		expect(response.headers['content-type']).toContain('application/json');
// 	});

// 	it.skip('should set the todo item to completed', async () => {
// 		const response = await request(baseUrl)
// 			.put('todos/1')
// 			.send({
// 				completed: true
// 			});

// 		expect(response.statusCode).toBe(200)
// 		expect(response.body).toMatchObject({completed: true, id: 1})
// 	});

// 	it('should delete an existing todo', async () => {
// 		const response = await request(baseUrl)
// 			.delete('todos/1');

// 		expect(response.statusCode).toBe(200);
// 		expect(response.body).toMatchObject({});
// 	})
// })

// xdescribe("API Testing",()=>{
//     test.skip("get users",async()=>{
//   await request(app)
//   .get('/users')
//   .expect(200)
//   .then(result=>{
//     expect(result&&result.body==='object')
//   })
//     })
// })

console.log("hello");

describe("Test example", () => {
    test("GET /", (done) => {
        request(app)
            .get("/")
            .expect("Content-Type", /json/)
            .expect(200)
            .expect((res) => {
                res.body.data.length = 1;
                res.body.data[0].email = "test@example.com";
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });
    // More things come here
    test("POST /send", (done) => {
        request(app)
            .post("/send")
            .expect("Content-Type", /json/)
            .send({
                email: "sv@gmail.com"
            })
        
          .expect(201)
            .expect((res) => {
              expect(  res.body.data[res.body.data.length - 1].email).toEqual("sv@gmail.com")
            }
            )
            .end((err, res) => {
                if (err) return done(err);
                elementId=res.body.data[1].id;
                return done();
            });

    });

    test("PUT /update/:id", (done) => {
        request(app)
            .put(`/update/${elementId}`)
            .expect("Content-Type", /json/)
            .send({
                email: "mendes@example.com",
            })
            .expect(200)
            .expect((res) => {
                res.body.data.length = 2;
                res.body.data[0].email = "test@example.com";
                res.body.data[1].id = elementId;
                res.body.data[1].email = "mendes@example.com";
                expect(  res.body.data[res.body.data.length - 1].email).toEqual("mendes@example.com")
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });

    test("DELETE /destroy/:id", (done) => {
        request(app)
            .delete(`/destroy/${elementId}`)
            .expect("Content-Type", /json/)
            .expect(200)
            .expect((res) => {
                res.body.data.length = 1;
                res.body.data[0].email = "test@example.com";
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });
});