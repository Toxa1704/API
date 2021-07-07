jQuery(function($){

    // показывать html форму при нажатии кнопки «Обновить товар» 
    $(document).on('click', '.update-product-button', function(){

        // получаем ID товара 
        var id = $(this).attr('data-id');
    });

    // читаем одну запись на основе данного идентификатора товара 
    $.getJSON("http://rest-api/api/product/read_one.php?id=" + id, function(data){

    // значения будут использоваться для заполнения нашей формы 
    var name = data.name;
    var price = data.price;
    var description = data.description;
    var category_id = data.category_id;
    var category_name = data.category_name;

    // загрузка списка категорий 
    $.getJSON("http://rest-api/api/category/read.php", function(data){

    // строим список выбора 
    // перебор полученного списка данных 
    var categories_options_html=`<select name='category_id' class='form-control'>`;

    $.each(data.records, function(key, val){
        // опция предварительного выбора - это идентификатор категории 
        if (val.id==category_id) {
            categories_options_html+=`<option value='` + val.id + `' selected>` + val.name + `</option>`;
        } else {
            categories_options_html+=`<option value='` + val.id + `'>` + val.name + `</option>`; 
        }
    });
    categories_options_html+=`</select>`;

    // здесь будет HTML для обновления товара 
});
}); 
});