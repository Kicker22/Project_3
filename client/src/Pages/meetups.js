
// <<<<<<< master
//   render() {
//     return (
//       <div>
//         <TopNavbar/>
//       <Container className="text-center mt-4">
//         <br />
//         <br />
//         <Image src={Meetup} fluid />
//         <br />
//         <Jumbotron className="content-center mt-4 bg-transparent">
//           <h2 className="flex-center">Find, Connect, and Grow</h2>
//           <Row>
//             <Col size="md-8">
//               <Card
//                 heading={this.state.result.id || "Search for a Topic to Join"}
//               >
//                 {this.state.result.map( result => (
//                   <SearchResults 
//                     id={result.id}
//                     name={result.name}
//                     urlkey={result.urlkey}
//                     group_count={result.group_count}
//                     description={result.description}
//                     lang={result.lang}
//                   />
//                 ))} {this.state.result.length === 0 && (
//                   <h3>No Results to Display</h3>
//                 )}
//               </Card>
//             </Col>
//             <Col size="md-4">
//               <Card heading="Search">
//                 <SearchForm
//                   value={this.state.search}
//                   handleInputChange={this.handleInputChange}
//                   handleFormSubmit={this.handleFormSubmit}
//                 />
//               </Card>
//             </Col>
//           </Row>
//         </Jumbotron>
//         <Nav.Item>
//           <Nav.Link className="text-info py-4" href="/">
//             Home
//           </Nav.Link>
//         </Nav.Item>
//       </Container>
//       </div>
//     );
//   }
// }

// >>>>>>> master
