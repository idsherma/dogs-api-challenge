(function(scs) {
    scs(window.jQuery, window, document);
    }(function($, window, document) {

        function shoppingList() {

            $("#js-shopping-list-form").submit(function(e) {
              e.preventDefault();

                let textItem = $(this).find('input[name="shopping-list-entry"]').val();

                if (textItem !== "") {	
                    $('.shopping-list').append((`<li>
                    <span class="shopping-item">${textItem}</span>
                    <div class="shopping-item-controls">
                        <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                        </button>
                        <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                        </button>
                    </div>
                    </li>`));
    
                  $('#shopping-list-entry').val('');
                } 

            });

            $('.shopping-list').on('click', '.shopping-item-toggle', function() {
                $(this).parent().prev().toggleClass('shopping-item__checked');
            });
            
            $('.shopping-list').on('click','.shopping-item-delete', function() {
                $(this).closest('li').remove();
            });
        }

        shoppingList();
        
    })
);