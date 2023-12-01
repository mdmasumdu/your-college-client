import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";


import { useState } from "react";
import useAuth from "../../../Components/Hooks/useAuth";
import useAxiossecure from "../../../Components/Hooks/useAxiossecure";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Checkout = () => {
  const navigate=useNavigate();
    const stripe=useStripe();
    const elements=useElements();
    const axiosSecure=useAxiossecure();
    const theclass =useLoaderData();
    const {status,Title,Name,Image,Short_description,total_enrolment,email} =theclass
  const price =parseInt(theclass.price);
  const enrolledstudents =parseInt(theclass.total_enrolment);
  console.log(enrolledstudents)
  
    const {user} =useAuth();

    const [cliensecret,setclientsecret]=useState('')


    useEffect(()=>{
      axiosSecure.post("/create-payment-intent",{price:price})
      .then(res=>{
        console.log(res.data.clientSecret)
        setclientsecret(res.data.clientSecret)
      })

    },[axiosSecure,price])


const handleSubmit =async(e)=>{
    e.preventDefault();

    if(!stripe || !elements){
        return
    }

    const card =elements.getElement(CardElement)


    if(!card){
        return
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }


      const {paymentIntent,error:confirmerror} = await stripe.confirmCardPayment(cliensecret,
        {
          payment_method:{
            card:card,
            billing_details:{
              name:user?.displaName ||"annonomous",
              email:user?.email||"annonomous"
            }
          }
        })

        if(confirmerror){
          console.log("confirmeroor",confirmerror)
        }
        else{
          console.log("confirm intent",paymentIntent)
          if(paymentIntent.status === "succeeded"){
            console.log(paymentIntent.id)

            const payment={
               studentemail:user.email,
               purchasedclassid:theclass._id,
               trasanctiond:paymentIntent.id,
               price:price,
               date: new Date(),
               status,
               Title,
               Name,
               Image,
               Short_description,
               total_enrolment,
               email
            }

          const ress =axiosSecure.patch(`/classenroll/${theclass._id}`,{enrolledstudents});
          console.log(ress.data)
          
            const res =await axiosSecure.post("/payment",payment);
            console.log(res.data.insertedId)
            navigate("/dashboard/myenrolledclass")
            if(res.data.insertedId){
              Swal.fire({
                title: 'succsess!',
                text: 'succsesfully paid for the class',
                icon: 'success',
                confirmButtonText: 'Cool'
        
              })
            }
          }
        }
    }

    
    return (
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button  className="btn bg-orange-500 ml-6 mt-5" type="submit" disabled={!stripe ||!cliensecret}>
        Pay
      </button>
    </form>
    );
};

export default Checkout;