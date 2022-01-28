exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('musicas')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('musicas').insert([
        {
          user_id: 1,
          title: 'Carnation',
          release_date: '1990',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna lorem, fringilla quis neque quis, laoreet egestas quam. Proin molestie pulvinar sapien, nec eleifend libero posuere non. Aliquam lobortis id turpis laoreet posuere. Fusce at viverra ipsum. Etiam lobortis ligula posuere erat molestie vulputate. Morbi metus nibh, pellentesque placerat nunc nec, consectetur pretium orci. Mauris erat ipsum, convallis sed dui mattis, fringilla varius quam.',
        },
        {
          user_id: 1,
          title: 'Cast No Shadow',
          release_date: '1988',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna lorem, fringilla quis neque quis, laoreet egestas quam. Proin molestie pulvinar sapien, nec eleifend libero posuere non. Aliquam lobortis id turpis laoreet posuere. Fusce at viverra ipsum. Etiam lobortis ligula posuere erat molestie vulputate. Morbi metus nibh, pellentesque placerat nunc nec, consectetur pretium orci. Mauris erat ipsum, convallis sed dui mattis, fringilla varius quam.',
        },
        {
          user_id: 1,
          title: 'Champagne Supernova',
          release_date: '1990',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna lorem, fringilla quis neque quis, laoreet egestas quam. Proin molestie pulvinar sapien, nec eleifend libero posuere non. Aliquam lobortis id turpis laoreet posuere. Fusce at viverra ipsum. Etiam lobortis ligula posuere erat molestie vulputate. Morbi metus nibh, pellentesque placerat nunc nec, consectetur pretium orci. Mauris erat ipsum, convallis sed dui mattis, fringilla varius quam.',
        },
        {
          user_id: 1,
          title: 'Dont Look Back In Anger',
          release_date: '1994',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna lorem, fringilla quis neque quis, laoreet egestas quam. Proin molestie pulvinar sapien, nec eleifend libero posuere non. Aliquam lobortis id turpis laoreet posuere. Fusce at viverra ipsum. Etiam lobortis ligula posuere erat molestie vulputate. Morbi metus nibh, pellentesque placerat nunc nec, consectetur pretium orci. Mauris erat ipsum, convallis sed dui mattis, fringilla varius quam.',
        },
        {
          user_id: 1,
          title: 'Stand By Me',
          release_date: '1991',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna lorem, fringilla quis neque quis, laoreet egestas quam. Proin molestie pulvinar sapien, nec eleifend libero posuere non. Aliquam lobortis id turpis laoreet posuere. Fusce at viverra ipsum. Etiam lobortis ligula posuere erat molestie vulputate. Morbi metus nibh, pellentesque placerat nunc nec, consectetur pretium orci. Mauris erat ipsum, convallis sed dui mattis, fringilla varius quam.',
        },
        {
          user_id: 1,
          title: 'Stop Crying Your Heart Out',
          release_date: '1982',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna lorem, fringilla quis neque quis, laoreet egestas quam. Proin molestie pulvinar sapien, nec eleifend libero posuere non. Aliquam lobortis id turpis laoreet posuere. Fusce at viverra ipsum. Etiam lobortis ligula posuere erat molestie vulputate. Morbi metus nibh, pellentesque placerat nunc nec, consectetur pretium orci. Mauris erat ipsum, convallis sed dui mattis, fringilla varius quam.',
        },
        {
          user_id: 1,
          title: 'Wonderwall',
          release_date: '1983',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna lorem, fringilla quis neque quis, laoreet egestas quam. Proin molestie pulvinar sapien, nec eleifend libero posuere non. Aliquam lobortis id turpis laoreet posuere. Fusce at viverra ipsum. Etiam lobortis ligula posuere erat molestie vulputate. Morbi metus nibh, pellentesque placerat nunc nec, consectetur pretium orci. Mauris erat ipsum, convallis sed dui mattis, fringilla varius quam.',
        },
        {
          user_id: 2,
          title: 'We Dance',
          release_date: '1992',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna lorem, fringilla quis neque quis, laoreet egestas quam. Proin molestie pulvinar sapien, nec eleifend libero posuere non. Aliquam lobortis id turpis laoreet posuere. Fusce at viverra ipsum. Etiam lobortis ligula posuere erat molestie vulputate. Morbi metus nibh, pellentesque placerat nunc nec, consectetur pretium orci. Mauris erat ipsum, convallis sed dui mattis, fringilla varius quam.',
        },
        {
          user_id: 2,
          title: 'Cut Your Hair',
          release_date: '1992',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna lorem, fringilla quis neque quis, laoreet egestas quam. Proin molestie pulvinar sapien, nec eleifend libero posuere non. Aliquam lobortis id turpis laoreet posuere. Fusce at viverra ipsum. Etiam lobortis ligula posuere erat molestie vulputate. Morbi metus nibh, pellentesque placerat nunc nec, consectetur pretium orci. Mauris erat ipsum, convallis sed dui mattis, fringilla varius quam.',
        },
        {
          user_id: 2,
          title: 'Slanted and Enchanted',
          release_date: '1992',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna lorem, fringilla quis neque quis, laoreet egestas quam. Proin molestie pulvinar sapien, nec eleifend libero posuere non. Aliquam lobortis id turpis laoreet posuere. Fusce at viverra ipsum. Etiam lobortis ligula posuere erat molestie vulputate. Morbi metus nibh, pellentesque placerat nunc nec, consectetur pretium orci. Mauris erat ipsum, convallis sed dui mattis, fringilla varius quam.',
        },
        {
          user_id: 2,
          title: 'Crooked Rain, Crooked Rain',
          release_date: '1984',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna lorem, fringilla quis neque quis, laoreet egestas quam. Proin molestie pulvinar sapien, nec eleifend libero posuere non. Aliquam lobortis id turpis laoreet posuere. Fusce at viverra ipsum. Etiam lobortis ligula posuere erat molestie vulputate. Morbi metus nibh, pellentesque placerat nunc nec, consectetur pretium orci. Mauris erat ipsum, convallis sed dui mattis, fringilla varius quam.',
        },
        {
          user_id: 2,
          title: 'Wowee Zowee',
          release_date: '1985',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna lorem, fringilla quis neque quis, laoreet egestas quam. Proin molestie pulvinar sapien, nec eleifend libero posuere non. Aliquam lobortis id turpis laoreet posuere. Fusce at viverra ipsum. Etiam lobortis ligula posuere erat molestie vulputate. Morbi metus nibh, pellentesque placerat nunc nec, consectetur pretium orci. Mauris erat ipsum, convallis sed dui mattis, fringilla varius quam.',
        },
        {
          user_id: 2,
          title: 'Brighten the Corners',
          release_date: '1991',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna lorem, fringilla quis neque quis, laoreet egestas quam. Proin molestie pulvinar sapien, nec eleifend libero posuere non. Aliquam lobortis id turpis laoreet posuere. Fusce at viverra ipsum. Etiam lobortis ligula posuere erat molestie vulputate. Morbi metus nibh, pellentesque placerat nunc nec, consectetur pretium orci. Mauris erat ipsum, convallis sed dui mattis, fringilla varius quam.',
        },
        {
          user_id: 2,
          title: 'Terror Twilight',
          release_date: '1992',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna lorem, fringilla quis neque quis, laoreet egestas quam. Proin molestie pulvinar sapien, nec eleifend libero posuere non. Aliquam lobortis id turpis laoreet posuere. Fusce at viverra ipsum. Etiam lobortis ligula posuere erat molestie vulputate. Morbi metus nibh, pellentesque placerat nunc nec, consectetur pretium orci. Mauris erat ipsum, convallis sed dui mattis, fringilla varius quam.',
        },
        {
          user_id: 3,
          title: 'Another Brick In The Wall',
          release_date: '1986',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna lorem, fringilla quis neque quis, laoreet egestas quam. Proin molestie pulvinar sapien, nec eleifend libero posuere non. Aliquam lobortis id turpis laoreet posuere. Fusce at viverra ipsum. Etiam lobortis ligula posuere erat molestie vulputate. Morbi metus nibh, pellentesque placerat nunc nec, consectetur pretium orci. Mauris erat ipsum, convallis sed dui mattis, fringilla varius quam.',
        },
        {
          user_id: 3,
          title: 'Comfortably Numb',
          release_date: '1987',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna lorem, fringilla quis neque quis, laoreet egestas quam. Proin molestie pulvinar sapien, nec eleifend libero posuere non. Aliquam lobortis id turpis laoreet posuere. Fusce at viverra ipsum. Etiam lobortis ligula posuere erat molestie vulputate. Morbi metus nibh, pellentesque placerat nunc nec, consectetur pretium orci. Mauris erat ipsum, convallis sed dui mattis, fringilla varius quam.',
        },
        {
          user_id: 3,
          title: 'Hey You',
          release_date: '1988',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna lorem, fringilla quis neque quis, laoreet egestas quam. Proin molestie pulvinar sapien, nec eleifend libero posuere non. Aliquam lobortis id turpis laoreet posuere. Fusce at viverra ipsum. Etiam lobortis ligula posuere erat molestie vulputate. Morbi metus nibh, pellentesque placerat nunc nec, consectetur pretium orci. Mauris erat ipsum, convallis sed dui mattis, fringilla varius quam.',
        },
        {
          user_id: 3,
          title: 'Money',
          release_date: '1984',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna lorem, fringilla quis neque quis, laoreet egestas quam. Proin molestie pulvinar sapien, nec eleifend libero posuere non. Aliquam lobortis id turpis laoreet posuere. Fusce at viverra ipsum. Etiam lobortis ligula posuere erat molestie vulputate. Morbi metus nibh, pellentesque placerat nunc nec, consectetur pretium orci. Mauris erat ipsum, convallis sed dui mattis, fringilla varius quam.',
        },
        {
          user_id: 3,
          title: 'Wish You Were Here',
          release_date: '1980',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna lorem, fringilla quis neque quis, laoreet egestas quam. Proin molestie pulvinar sapien, nec eleifend libero posuere non. Aliquam lobortis id turpis laoreet posuere. Fusce at viverra ipsum. Etiam lobortis ligula posuere erat molestie vulputate. Morbi metus nibh, pellentesque placerat nunc nec, consectetur pretium orci. Mauris erat ipsum, convallis sed dui mattis, fringilla varius quam.',
        },
        {
          user_id: 3,
          title: 'Dogs',
          release_date: '1978',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna lorem, fringilla quis neque quis, laoreet egestas quam. Proin molestie pulvinar sapien, nec eleifend libero posuere non. Aliquam lobortis id turpis laoreet posuere. Fusce at viverra ipsum. Etiam lobortis ligula posuere erat molestie vulputate. Morbi metus nibh, pellentesque placerat nunc nec, consectetur pretium orci. Mauris erat ipsum, convallis sed dui mattis, fringilla varius quam.',
        },
        {
          user_id: 3,
          title: 'Have a Cigar',
          release_date: '1981',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna lorem, fringilla quis neque quis, laoreet egestas quam. Proin molestie pulvinar sapien, nec eleifend libero posuere non. Aliquam lobortis id turpis laoreet posuere. Fusce at viverra ipsum. Etiam lobortis ligula posuere erat molestie vulputate. Morbi metus nibh, pellentesque placerat nunc nec, consectetur pretium orci. Mauris erat ipsum, convallis sed dui mattis, fringilla varius quam.',
        },
      ])
    })
}
