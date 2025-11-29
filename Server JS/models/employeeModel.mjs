import mongoose from 'mongoose';
const { Schema } = mongoose;

const employeeSchema = new Schema({
    employeeName: String,
    department: String,
    employeePhone: Number,
    // employeeAge: { 
    //     type: Number,
    //     required: [true,'Age is required!'],
    //     min: [18,'Employee must be 18 years old'],
    //     max: [80,"Employee's age must be under 80 years"]
    // }
    employeeAge: {
        type: Number,
        validate: {
            validator: function(v){
                console.log(v,Number.isInteger(v))
               
                return Number.isInteger(v);
                
            },
            message: 'Age is not a Integer'
        }
    }
});

export const Employee = mongoose.model('Employee', employeeSchema);
