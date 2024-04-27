import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import { BiMessageAltDetail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { MdDisplaySettings, MdEmail } from "react-icons/md";


const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button  text="VIA SUPPORT CHAT" icon={<BiMessageAltDetail fontSize="24px"/>}/> 
        <Button  text="VIA CALL" icon={<IoMdCall fontSize="24px"/>}/> 
        </div>
        <Button  isoutline={true} text="VIA EMAIL FORM" icon={<MdEmail fontSize="24px"/>}/> 


        <form>
            <div className={styles.form_control}>
            <label htmlFor="name">NAME</label>
            <input type="text" name='name' />
            </div>

            <div className={styles.form_control}>
            <label htmlFor="email">EMAIL</label>
            <input type="email" name='email' />
            </div>

            <div className={styles.form_control}>
            <label htmlFor="text">TEXT</label>
            <textarea name='text' rows="8" />
            </div>

            <div style={{display:"flex", justifyContent:"end"}}>
            <Button  text="SUBMIT" fontSize="24px"/> 

            </div>
        </form>


      </div>
      <div className={styles.contact_image}>
        <img src="./images/phone.jpg" alt="contact image" />
      </div>
    </section>
  )
}

export default ContactForm
