var shows = [
    {
        title: 'Scrubs',
        seasons: [24, 22, 22, 25, 24, 22, 11, 19, 13],
        pictureSrcList: ['scrubs1.gif', 'scrubs2.gif', 'scrubs3.gif', 'scrubs4.gif', 'scrubs5.gif']
    },
    {
        title: 'Friends',
        seasons: [24, 24, 25, 24, 24, 25, 24, 24, 24, 18],
        pictureSrcList: ['friends1.gif', 'friends2.gif', 'friends3.gif', 'friends4.gif', 'friends5.gif']
    },
    {
        title: 'Everybody hates Chris',
        seasons: [22, 22, 22, 22],
        pictureSrcList: ['chris1.gif', 'chris2.gif', 'chris3.gif', 'chris4.gif', 'chris5.gif']
    },
    {
        title: 'Black Books',
        seasons: [6, 6, 6],
        pictureSrcList: ['bb1.gif', 'bb2.gif', 'bb3.gif', 'bb4.gif', 'bb5.gif']
    },
    {
        title: 'The Office',
        seasons: [6, 22, 25, 14, 26, 26, 26, 24, 22],
        pictureSrcList: ['office1.gif', 'office2.gif', 'office3.gif', 'office4.gif', 'office5.gif']
    },
    {
        title: 'The Big Bang Theory',
        seasons: [17, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24],
        pictureSrcList: ['tbv1.gif', 'tbv2.gif', 'tbv3.gif', 'tbv4.gif', 'tbv5.gif']
    },
    {
        title: 'ALF',
        seasons: [25, 25, 24, 24],
        pictureSrcList: ['alf1.gif', 'alf2.gif', 'alf3.gif', 'alf4.gif', 'alf5.gif']
    },
    {
        title: '2 Broke Girls',
        seasons: [24, 24, 24, 22, 22, 22],
        pictureSrcList: ['tbg1.gif', 'tbg2.gif', 'tbg3.gif', 'tbg4.gif', 'tbg5.gif']
    },
    {
        title: 'Parks and Recreation',
        seasons: [6, 24, 16, 22, 22, 22, 13],
        pictureSrcList: ['parks1.gif', 'parks2.gif', 'parks3.gif', 'parks4.gif', 'parks5.gif']
    },
    {
        title: 'Brooklyn Nine-Nine',
        seasons: [23, 23, 23, 22, 22],
        pictureSrcList: ['bnn1.gif', 'bnn2.gif', 'bnn3.gif', 'bnn4.gif', 'bnn5.gif']
    }
];


function randomEpisode(){
    //случайным образом определяем объект из массива 
    var showNumber = Math.floor(Math.random() * shows.length);
    var show = shows[showNumber];
    
    //из выбранного выше объекта получаем случайную позицию в массиве - сезон
    var seasonNumber = Math.floor(Math.random() * show.seasons.length) + 1;
    //записываем в переменную выбранное выше число из массива
    var season = show.seasons[seasonNumber-1];
    
    //из выбранного из масива числа получаем случайное от 1 до количества серий в сезоне
    var episodeNumber = Math.floor(Math.random() * season) + 1;
    
    //случайная позиция из массива со ссылками на картинки
    var pictureNumber = Math.floor(Math.random() * show.pictureSrcList.length);
    //записываем в переменную выбранную ссылку
    var pictureSrc = show.pictureSrcList[pictureNumber];
   
    //возвращаем результат функции в виде объекта
    return{
        title: show.title,
        seasonNumber: seasonNumber,
        episodNumber: episodeNumber,
        pictureSrc: pictureSrc
    }
}

