let isMenuOpen = false
const mainButtons = [{
        name: 'Галерея',
        image: "images/настоящая-рыбалка.jpg",
        path: 'html/gallery.html'
    }, {
        name: 'Карточка персонажа',
        image: "images/тельмы.jpg",
        path: "inProgressAlert()"
}]
const images = [{
        name: 'Саня австрийский художник',
        path: 'австрия'
    }, {
        name: 'галактическая Саша',
        path: 'галактика'
    },{
        name: 'Санечка улыбается :)',
        path: 'др-1'
    },{
        name: 'Сашка крутая',
        path: 'др-2'
    },{
        name: 'Санька красивая',
        path: 'др-3'
    },{
        name: 'Сашуня косо смотрящая',
        path: 'др-4'
    },{
        name: 'Сашечка в темноте',
        path: 'др-тьма'
    },{
        name: 'Александра заебалась учиться',
        path: 'заебалась'
    },{
        name: 'Сашуликс квадрокоптер',
        path: 'квадрокоптер'
    },{
        name: 'Сашенька с конфетками',
        path: 'конфетки'
    },{
        name: 'Шуня с кренделёчком',
        path: 'крендель'
    },{
        name: 'Санчоус на летней прогулке',
        path: 'лето'
    },{
        name: 'Сантино с другим Сантино в лифте',
        path: 'лифт-1'
    },{
        name: 'ещё Сантино с другим Сантино в лифте',
        path: 'лифт-2'
    },{
        name: 'Сашурочка с другим Сашурочкой в лифте',
        path: 'лифт-3'
    },{
        name: 'Сантьяго Барнабео только попала в МЧС',
        path: 'мчс-5класс'
    },{
        name: 'Сашкс с ножечком',
        path: 'нож'
    }, {
        name: 'Алексашу немножечко перекосоебило',
        path: 'перекосоебило'
    },{
        name: 'Алексаня подглядывает',
        path: 'подглядывает'
    },{
        name: 'Александрия готовится к рыбалке',
        path: 'рыбалка'
    },{
        name: 'Санчоус с синим глазиком в октябре',
        path: 'синий-глазек'
    },{
        name: 'СаNya~ с самоходной установкой',
        path: 'СУ'
    },{
        name: 'Сочлененный автобус в розовой одежде',
        path: 'телефон-1'
    },{
        name: 'Александр чуть-чуть Иосиф',
        path: 'фотка-да'
}]

const onHeaderMenuButtonClick = () => {
    isMenuOpen = !isMenuOpen
    const menu = document.querySelector('.context-menu')

    menu.innerHTML = isMenuOpen ? `
        <a class="menu-text" onClick="inProgressAlert()">Главная</a>
        <a class="menu-text" href="${window.location.pathname.includes('/html/') ? '' : 'html/'}what-is-new.html">Что нового?</a>
        <a class="menu-text" href="https://github.com/CaHeK2009/telmovka_official" target="_blank">Разработка</a>
        <a class="menu-text" onClick="inProgressAlert()">О разработчике</a>
    ` : ``
}

const displayMainButtons = () => {
    const mainBlock = document.getElementById('index-block')
    mainButtons.forEach(mainButton => {
        mainBlock.innerHTML += `
            <a class="main-button" style='background-image:url("${mainButton.image}");' href="${mainButton.path}">${mainButton.name}</a>
    `});
}

const displayImages = () => {
    const galleryBlock = document.getElementById('gallery-block')
    images.forEach(image => {
        galleryBlock.innerHTML += `
            <div class="gallery-element">
                <img src="../images/${image.path}.jpg" class="gallery-image"/>
                <span class="gallery-text">Это ${image.name}</span>
            </div>
    `})
    galleryBlock.innerHTML += `
        <p class="description">На этом фоточки заканчиваются, но мы не унываем и надеемся что разраб будет обновлять галерею)</p>
        <p class="description">BTW вы можете добавить себе тг стикерпак со всеми фоточками</p>
        <a class="gradient-stickerpack-button" href="https://t.me/addstickers/StikerochkiSAleksandroj" target="_blank">Добавить стикерпак</a>
    `

}

const inProgressAlert = () => {
    alert('Данный раздел находится в разработке. Не трогайте его, он боится людей')
}

window.location.pathname.split('/').pop() == 'gallery.html' ? displayImages() : displayMainButtons()