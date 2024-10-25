import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`goals-content-container ${className}`}>
      <div className="goals-content1">
        <div className="solution-summary">
          <div className="solution-details">
            <b className="design-goals1">Design Goals</b>
            <div className="simplify-ordering-process-container">
              <p className="simplify-ordering-process">{`Simplify Ordering Process: Make it easy for students to browse menus and order food with `}</p>
              <p className="simplify-ordering-process">just a few taps.</p>
              <p className="simplify-ordering-process">&nbsp;</p>
              <p className="simplify-ordering-process">
                Optimize for Campus Deliveries: Ensure fast delivery times with
                clear navigation for delivery
              </p>
              <p className="simplify-ordering-process">
                {" "}
                personnel and students.
              </p>
              <p className="simplify-ordering-process">&nbsp;</p>
              <p className="simplify-ordering-process">{`Real-Time Updates: Provide real-time notifications for order status, including preparation `}</p>
              <p className="simplify-ordering-process">
                and delivery tracking.
              </p>
              <p className="simplify-ordering-process">&nbsp;</p>
              <p className="simplify-ordering-process">{`Personalization and Customization: Offer personalized meal recommendations based on `}</p>
              <p className="simplify-ordering-process">
                students’ preferences and dietary needs.
              </p>
              <p className="simplify-ordering-process">&nbsp;</p>
              <p className="simplify-ordering-process">{`Contactless and Flexible Delivery: Implement delivery options to dorm rooms, classrooms, `}</p>
              <p className="simplify-ordering-process">
                or campus common areas with contactless delivery for added
                convenience.
              </p>
            </div>
          </div>
          <div className="solution-parent">
            <b className="solution">Solution</b>
            <div className="simplify-ordering-process-container">
              <p className="simplify-ordering-process">
                To address the identified pain points, UniEats was designed with
                the following features:
              </p>
              <p className="simplify-ordering-process">&nbsp;</p>
              <p className="simplify-ordering-process">
                1. User-Friendly Interface
              </p>
              <p className="simplify-ordering-process">
                The app interface was kept simple and intuitive, allowing users
                to:
              </p>
              <ul className="browse-menus-students-can-bro">
                <li className="browse-menus-students">
                  Browse Menus: Students can browse cafeteria menus, including
                  daily specials, popular items,
                </li>
              </ul>
              <p className="and-dietary-specific-options">
                {" "}
                and dietary-specific options like vegetarian, vegan, and
                gluten-free.
              </p>
              <ul className="browse-menus-students-can-bro">
                <li className="browse-menus-students">
                  Quick Order: A “One-Click Order” feature lets users reorder
                  their favorite meals with ease.
                </li>
              </ul>
              <p className="simplify-ordering-process">&nbsp;</p>
              <p className="simplify-ordering-process">
                2. Campus-Specific Delivery
              </p>
              <p className="simplify-ordering-process">
                The app integrates GPS tracking specifically designed for campus
                navigation:
              </p>
              <ul className="browse-menus-students-can-bro">
                <li className="browse-menus-students">{`Precise Location Mapping: Delivery personnel can easily locate dorms, classrooms, and `}</li>
              </ul>
              <p className="and-dietary-specific-options">
                {" "}
                common areas using campus-specific GPS mapping.
              </p>
              <ul className="browse-menus-students-can-bro">
                <li className="browse-menus-students">{`Delivery Time Estimates: Users receive accurate time estimates based on current cafeteria `}</li>
              </ul>
              <p className="and-dietary-specific-options">
                {" "}
                capacity and delivery distance.
              </p>
              <p className="simplify-ordering-process">&nbsp;</p>
              <p className="simplify-ordering-process">
                3. Customizable Meal Plans
              </p>
              <ul className="browse-menus-students-can-bro">
                <li className="browse-menus-students">
                  Meal Plans and Subscriptions: Students can purchase weekly or
                  monthly meal plans,
                </li>
              </ul>
              <p className="and-dietary-specific-options">
                {" "}
                reducing time spent on daily ordering.
              </p>
              <p className="simplify-ordering-process">&nbsp;</p>
              <p className="simplify-ordering-process">
                4. Real-Time Notifications
              </p>
              <ul className="browse-menus-students-can-bro">
                <li className="browse-menus-students">{`Order Tracking: Students receive push notifications on the status of their orders, from `}</li>
              </ul>
              <p className="and-dietary-specific-options">
                {" "}
                preparation to delivery.
              </p>
              <ul className="browse-menus-students-can-bro">
                <li className="browse-menus-students">{`Pickup or Delivery: Users can choose between picking up their order from the cafeteria or `}</li>
              </ul>
              <p className="and-dietary-specific-options">
                {" "}
                having it delivered to their location.
              </p>
              <p className="simplify-ordering-process">&nbsp;</p>
              <p className="simplify-ordering-process">
                5. Contactless Payment and Delivery
              </p>
              <ul className="browse-menus-students-can-bro">
                <li className="browse-menus-students">{`Secure Payments: The app integrates with popular payment options like Apple Pay, `}</li>
              </ul>
              <p className="and-dietary-specific-options">
                {" "}
                Google Pay, and PayPal, allowing secure, contactless payments.
              </p>
              <ul className="browse-menus-students-can-bro">
                <li className="browse-menus-students">{`Contactless Delivery: Delivery personnel leave the food at designated drop-off spots `}</li>
              </ul>
              <p className="and-dietary-specific-options">
                {" "}
                (dorm doors, classroom entrances), with no need for in-person
                contact.
              </p>
            </div>
          </div>
          <b className="designs8">Designs</b>
        </div>
        <div className="home-wireframe-1-parent">
          <img
            className="cart-wireframe-1-icon"
            loading="lazy"
            alt=""
            src="/homewireframe-1@2x.png"
          />
          <img
            className="product-wireframe-2-icon"
            loading="lazy"
            alt=""
            src="/product-wireframe-2@2x.png"
          />
          <img
            className="cart-wireframe-1-icon"
            loading="lazy"
            alt=""
            src="/cart-wireframe-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
