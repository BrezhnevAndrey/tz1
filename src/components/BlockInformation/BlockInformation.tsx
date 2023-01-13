import classNames from "classnames";
import React from "react";
import styles from "./blockinformation.less";

const aboutUser = `Клиенты видят в нем эксперта по вопросам разработки комплексных решений
финансовых продуктов, включая такие аспекты, как организационная
структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам
лучше понимать структуру рисков их бизнеса, улучшать процессы за счет
применения новейших технологий и увеличивать продажи, используя самые
современные аналитические инструменты. В работе с клиентами недостаточно
просто решить конкретную проблему или помочь справиться с трудностями.
Не менее важно уделять внимание обмену знаниями: "Один из самых
позитивных моментов — это осознание того, что ты помог клиенту перейти
на совершенно новый уровень компетентности, уверенность в том, что после
окончания проекта у клиента есть все необходимое, чтобы дальше
развиваться самостоятельно". Помимо разнообразных проектов для клиентов
финансового сектора, Сорин ведет активную предпринимательскую
деятельность. Он является совладельцем сети клиник эстетической медицины
в Швейцарии, предлагающей инновационный подход к красоте, а также
инвестором других бизнес-проектов.`;

export function BlockInformation() {
  const contactPhoneClasses = classNames(styles.contact, styles.phone);
  const contactEmailClasses = classNames(styles.contact, styles.email);

  return (
    <div className={styles.container}>
      <div className={styles.text}>{aboutUser}</div>
      <div className={styles.contacts}>
        <a href="tel: +7(954)333-44-55" className={contactPhoneClasses}>
          +7(954)333-44-55
        </a>
        <a href="mailto: sykfafkar@gmail.com" className={contactEmailClasses}>
          sykfafkar@gmail.com
        </a>
      </div>
    </div>
  );
}
