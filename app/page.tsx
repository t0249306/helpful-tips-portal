export default function Home() {
  return (
    <div>
      {/* Шапка */}
      <div className="header-wrapper">
        <header className="header">
          <div className="container">
            <h1>Информационный портал полезных советов</h1>
            <nav>
              <ul className="menu">
                <li>
                  <a href="#">Главная</a>
                </li>
                <li>
                  <a href="#tips">Советы</a>
                </li>
                <li>
                  <a href="#categories">Категории</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>

      <main>
        {/* Главный баннер */}
        <div className="banner-wrapper">
          <section className="banner">
            <div className="container">
              <h2>Полезные советы на каждый день</h2>
              <p>Наш портал собрал лучшие советы и рекомендации для улучшения вашей повседневной жизни.</p>
              <a href="#tips" className="button">
                Смотреть советы
              </a>
            </div>
          </section>
        </div>

        {/* Категории */}
        <section id="categories" className="section">
          <div className="container">
            <h2>Категории советов</h2>
            <p>Выберите интересующую вас тему и получите полезные рекомендации</p>

            <div className="categories">
              <div className="category-card">
                <h3>Здоровье</h3>
                <p>Советы для здорового образа жизни</p>
                <a href="#">Подробнее</a>
              </div>
              <div className="category-card">
                <h3>Продуктивность</h3>
                <p>Как быть эффективнее каждый день</p>
                <a href="#">Подробнее</a>
              </div>
              <div className="category-card">
                <h3>Отношения</h3>
                <p>Советы для гармоничных отношений</p>
                <a href="#">Подробнее</a>
              </div>
            </div>
          </div>
        </section>

        {/* Советы */}
        <div className="tips-wrapper">
          <section id="tips" className="section tips-section">
            <div className="container">
              <h2>Полезные советы</h2>
              <p>Наши лучшие рекомендации для улучшения вашей жизни</p>

              <div className="tips">
                <div className="tip-card">
                  <h3>Как правильно планировать свой день</h3>
                  <p>
                    Начинайте день с составления списка задач. Выделите 3 самых важных дела и сосредоточьтесь на них в
                    первую очередь. Не забывайте о перерывах между задачами для поддержания продуктивности.
                  </p>
                </div>
                <div className="tip-card">
                  <h3>Советы для здорового сна</h3>
                  <p>
                    Старайтесь ложиться и вставать в одно и то же время. Избегайте кофеина во второй половине дня.
                    Создайте комфортную обстановку в спальне: тихо, темно и прохладно.
                  </p>
                </div>
                <div className="tip-card">
                  <h3>Как сэкономить на продуктах</h3>
                  <p>
                    Составляйте список покупок заранее и придерживайтесь его. Покупайте сезонные продукты. Готовьте
                    большие порции и замораживайте часть для будущих приемов пищи.
                  </p>
                </div>
                <div className="tip-card">
                  <h3>Простые способы снять стресс</h3>
                  <p>
                    Практикуйте глубокое дыхание: вдох на 4 счета, задержка на 7, выдох на 8. Регулярно выполняйте
                    физические упражнения. Найдите время для хобби, которое приносит вам удовольствие.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Подписка */}
        <div className="subscribe-wrapper">
          <section className="section subscribe-section">
            <div className="container">
              <h2>Получайте новые советы на почту</h2>
              <p>Подпишитесь на нашу рассылку, чтобы получать самые полезные советы каждую неделю</p>

              <form className="subscribe-form">
                <input type="email" placeholder="Введите ваш email" required />
                <button type="submit" className="button">
                  Подписаться
                </button>
              </form>
              <p className="small-text">Мы не отправляем спам. Вы можете отписаться в любой момент.</p>
            </div>
          </section>
        </div>
      </main>

      {/* Футер */}
      <div className="footer-wrapper">
        <footer className="footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Информационный портал полезных советов. Все права защищены.</p>
            <p>Разработал: Табаков Олег, 2ИП-4-23</p>
          </div>
        </footer>
      </div>
    </div>
  )
}