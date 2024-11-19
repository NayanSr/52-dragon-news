/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const NewsCart = ({ news }) => {
  console.log(news);
  return (
    <div className="mb-12 border-2 p-4 rounded-2xl">
      <h2 className="text-2xl">{news.title}</h2>
      <img src={news.image_url} alt="" />
      <Link to={`/news/${news._id}`}>Read More</Link>
    </div>
  );
};

export default NewsCart;

/* 
{
    "_id": "cd2b53655737cc4077542baea9f8f75d",
    "others_info": {
        "is_todays_pick": false,
        "is_trending": true
    },
    "category_id": "02",
    "rating": {
        "number": 4.5,
        "badge": "Excellent"
    },
    "total_view": 700,
    "title": "Halo, GTA Vice City Actor Directing Movie About Hunter Biden",
    "author": {
        "name": "Daniel Deangelo",
        "published_date": "2022-08-30 20:02:52",
        "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
    "image_url": "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",
    "details": "Robert Davi will be a pretty familiar face to fans of entertainment from the 1980s and 1990s, with supporting roles in The Goonies, Die Hard, and many other films and TV shows. He also lent his voice to Colonel Juan Cortez, a significant character in Grand Theft Auto: Vice City. Meanwhile, Halo fans will recognize his voice as that of the Elite Shipmaster Ratas Vadum from Halo 2 and Halo 3. He's responsible for some of the trilogy's most iconic scenes, including his speech in Halo 2 and 'Then it is an even fight' line in Halo 3."
}
*/
