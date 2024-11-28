$(function() {
  $('.accordion-header').on('click',function(){
    $(this).siblings('div').slideUp()
    if(!$(this).next().is(":visible")){
      $(this).next().slideDown()
    }
  })

  $('.todos button').on('click', function(){
    $.ajax({
      url:`https://dummyjson.com/todos`,
      type:'GET',
      contentType: 'application/json',

      success:function(response){
        $('ul').empty()
        response.todos.forEach( todo => {
          $('ul').append(`
            <li> ${todo.todo}</li>
            `)
        })
        
        console.log(response.todos)
      }
    })
  })
})

