const ROUTES = {
  newQuizRoute: () => "/quizzes/new", //Users can create quizzes that are associated with topics and contain lists of flashcards and Users can add and remove card fields in the new quiz form
  quizRoute: (id) => `/quizzes/${id}`, //Users can view an individual quiz and flip cards over
  quizzesRoute: () => "/quizzes", //Users can view all quizzes and Users can click on an individual quiz and be redirected to that quiz’s page
  newTopicRoute: () => "/topics/new", //Users can create topics
  topicRoute: (id) => `/topics/${id}`, //Users can view an individual topic and all quizzes for that topic and Users can click on a quiz associated with a topic and be redirected to that quiz’s page
  topicsRoute: () => "/topics", //Users can view all topics and click on an individual topic and be redirected to the page for that topic
};
  
  export default ROUTES;
  