import styles from "./team.module.css";

const team = [
  {
    name: "Sumit Halge",
    role: "Founder & Full Stack Developer",
    image: "/team/sumith.png",
  },
  {
    name: "Govind Helaskar",
    role: "Buisiness & Finance Analyst",
    image: "/team/rahul.jpg",
  },
  {
    name: "Arjun Rathod",
    role: "Digital Marketing Lead",
    image: "/team/priya.jpg",
  },
  {
    name: "Sadashiv Joshi",
    role: "Business Development Executive",
    image: "/team/neha.jpg",
  },
];

export default function TeamPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Our Team</h1>
      <p className={styles.subtitle}>
        Meet the people behind Arc Digital Solution
      </p>

      <div className={styles.grid}>
        {team.map((member, index) => (
          <div key={index} className={styles.card}>
            <img
              src={member.image}
              alt={member.name}
              className={styles.avatar}
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
