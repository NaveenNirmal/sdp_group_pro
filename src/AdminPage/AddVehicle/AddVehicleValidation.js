import $ from 'jquery';
import validate from 'jquery-validation'

function addNewVehicleValidate(){
    $('#addVehicle').validate({
        errorElement: 'span',
        rules:{
            vehiNo:{
                required:true,
                normalizer: function(value){
                    return $.trim(value);
                }
            },
            regCenter:{
                required:true,
                normalizer: function(value){
                    return $.trim(value);
                }
            },
            vehiType:{
                required:true,
                normalizer: function(value){
                    return $.trim(value);
                }
            },
            vehiAvailable:{
                required:true,
                normalizer: function(value){
                    return $.trim(value);
                }
            }
        },
        messages:{
            vehiNo:{
                required:'Vehicle Plate Number Field Required'
            },
            regCenter:{
                required:'Please Select a Regional Center'
            },
            vehiType:{
                required:'Please Select a Vehicle Type'
            },
            vehiAvailable:{
                required: 'Please Select Availability'
            }
        }
    })
}

export default addNewVehicleValidate;