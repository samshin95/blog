// import Link from "next/link";
// import Date from "./date";
// import { getSortedPostsData } from "../lib/posts";

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

// export function Topics({ allPostsData }) {
//   return (
//     <section>
//       <h2>Blog</h2>
//       <ul>
//         {allPostsData.map(({ id, date, title }) => (
//           <li key={id}>
//             <Link href={`/posts/${id}`}>{title}</Link>
//             <br />
//             <small>
//               <Date dateISO={date} />
//             </small>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }
