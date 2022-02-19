import $ from 'jquery';
import validate from 'jquery-validation';

function newUserValidation(){
    $('#form_AddNewUser').validate({
        errorElement: 'span',
        rules:{
            empFullName:{
                required:true,
                normalizer: function(value){
                    return $.trim(value);
                }
            },
            empContactNo:{
                required:true,
                normalizer:function(value){
                    return $.trim(value);
                }
            },
            empEmail:{
                required:true,
                normalizer: function(value){
                    return $.trim(value);
                }
            },
            empPassword:{
                required:true,
                minlength:8,
                normalizer:function(value){
                    return $.trim(value);
                }
            },
            empBday:{
                required:true,
                normalizer:function(value){
                    return $.trim(value);
                }
            },
            empCenter:{
                required:true,
                normalizer:function(value){
                    return $.trim(value)
                }
            },
            empAddress:{
                required:true,
                normalizer:function(value){
                    return $.trim(value);
                }
            },
            empAvailability:{
                required:true,
                normalizer:function(value){
                    return $.trim(value);
                }
            },
            empType:{
                required:true,
                normalizer:function(value){
                    return $.trim(value);
                }
            }
        },
        messages:{
            empFullName:{
                required:"Full Name cannot be Empty"
            },
            empContactNo:{
                required:"Contact Number cannot be Empty"
            },
            empEmail:{
                required:"Email cannot be Empty"
            },
            empPassword:{
                required:"Password cannot be Empty"
            },
            empBday:{
                required:"Date of Birth cannot be Empty"
            },
            empCenter:{
                required:"Center cannot be Empty"
            },
            empAddress:{
                required:"Address cannot be Empty"
            },
            empAvailability:{
                required:"Availability cannot be Empty"
            },
            empType:{
                required:"Employee Type cannot be Empty"
            }
        }
    })
}

export default newUserValidation;