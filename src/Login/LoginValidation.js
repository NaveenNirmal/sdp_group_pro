import $ from 'jquery';
import validate from 'jquery-validation';

function loginInputValidation(){
    $('#user__LoginForm').validate({
        errorElement:'span',
        rules:{
            userEmail:{
                required:true,
                normalizer: function(value){
                    return $.trim(value);
                }
            },
            userPassword:{
                required:true,
                minlength:8,
                normalizer: function(value){
                    return $.trim(value);
                }
            }
        },
        messages:{
            userEmail:{
                required:'Email cannot be Empty!'
            },
            userPassword:{
                required:'Password cannot be Empty!'
            }
        }
    })
}

export default loginInputValidation;