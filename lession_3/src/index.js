import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePape from './components/HomePage';
import PostDataList from './components/PostDataList';
import AddPost from './components/AddPost';
import Post from './components/Post';
import PostWithContext from './components/PostWithList';
import PostWithList from './components/PostWithList';
import Page404 from './components/Page404';
import BasePost from './components/BasePost';
import Count from './components/Count';
import Login from './components/Authen/Login';
import BaseStudent from './components/BaseStudent';
import StudentDataList from './components/StudentDataList';
import AddStudent from './components/AddStudent';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <HomePape />,
        children: [
          {
            path: "post",
            element: <BasePost />,
            children: [
              {
                path: "",
                element: <PostDataList />,
              },
              {
                path: ":postId",
                element: <PostWithList />,
              },
              {
                path: "adds",
                element: <AddPost />,
              },
            ]
          },
          {
            path: "student",
            element: <BaseStudent />,
            children: [
              {
                path: "",
                element: <StudentDataList />,
              },
              {
                path: ":studentId",
                element: <StudentDataList />,
              },{
                path: "add",
                element: <AddStudent />,
              },
             
            ]
          },
          {
            path: "count",
            element: <Count></Count>
          }
          
        ]
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "404",
        element: <Page404 />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
      // {
      //   path: "/posts/:id",
      //   element: <Post />,
      // },
      
    ]
  },
]);

root.render(
  // <React.StrictMode>
    <RouterProvider router={router} >
      {/* <App /> */}
    </RouterProvider>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
