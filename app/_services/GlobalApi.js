import { gql, request } from "graphql-request";

const MASTER_URL = process.env.NEXT_PUBLIC_MASTER_URL;

/* ================= CATEGORY ================= */

const getCategory = async () => {
  const query = gql`
    query GetCategory {
      categories {
        id
        name
        icon {
          url
        }
        bgcolor {
          hex
        }
      }
    }
  `;
  return await request(MASTER_URL, query);
};

/* ================= ALL BUSINESSES ================= */

const getAllBusinessList = async () => {
  const query = gql`
    query BusinessList {
      businessLists (first: 50){
        id
        name
        about
        address
        email
        contactPerson
        images {
          url
        }
        category {
          name
        }
      }
    }
  `;
  return await request(MASTER_URL, query);
};

/* ================= BUSINESS BY CATEGORY ================= */

const getBusinessByCategory = async (category) => {
  const query = gql`
    query BusinessByCategory($category: String!) {
      businessLists(where: { category: { name: $category } }) {
        id
        name
        address
        contactPerson
        email
        images {
          url
        }
        category {
          name
        }
      }
    }
  `;
  return await request(MASTER_URL, query, { category });
};

/* ================= BUSINESS BY ID ================= */

const getBusinessById = async (id) => {
  const query = gql`
    query GetBusinessById($id: ID!) {
      businessList(where: { id: $id }) {
        id
        name
        about
        address
        email
        contactPerson
        images {
          url
        }
        category {
          name
        }
      }
    }
  `;
  return await request(MASTER_URL, query, { id });
};

/* ================= CREATE BOOKING PUBLISH ERROR SOLVE ================= */

const createNewBooking = async (
  businessId,
  date,
  time,
  userEmail,
  userName
) => {
  const mutation = gql`
    mutation CreateBooking(
      $businessId: ID!
      $date: String!
      $time: String!
      $userEmail: String!
      $userName: String!
    ) {
      createBooking(
        data: {
          date: $date
          time: $time
          userEmail: $userEmail
          userName: $userName
          businessList: { connect: { id: $businessId } }
        }
      ) {
        id
      }

      publishManyBookings(to: PUBLISHED) {
        count
      }
    }
  `;

  return await request(MASTER_URL, mutation, {
    businessId,
    date,
    time,
    userEmail,
    userName,
  });
};



/* ================= BOOKED SLOTS ================= */

const BusinessBookedSlot = async (businessId, date) => {
  const query = gql`
    query BookedSlots($businessId: ID!, $date: String!) {
      bookings(
        where: {
          businessList: { id: $businessId }
          date: $date
        }
      ) {
        time
      }
    }
  `;
  return await request(MASTER_URL, query, { businessId, date });
};

/* ================= USER BOOKINGS ================= */

const GetUserBookingHistory = async (userEmail) => {
  const query = gql`
    query UserBookings($userEmail: String!) {
      bookings(
        where: { userEmail: $userEmail }
        orderBy: publishedAt_DESC
      ) {
        id
        date
        time
        businessList {
          name
          address
          contactPerson
          images {
            url
          }
        }
      }
    }
  `;
  return await request(MASTER_URL, query, { userEmail });
};

/* ================= DELETE BOOKING ================= */

const deleteBooking = async (bookingId) => {
  const mutation = gql`
    mutation DeleteBooking($id: ID!) {
      deleteBooking(where: { id: $id }) {
        id
      }
    }
  `;
  return await request(MASTER_URL, mutation, { id: bookingId });
};




export default {
  getCategory,
  getAllBusinessList,
  getBusinessByCategory,
  getBusinessById,
  createNewBooking,
  BusinessBookedSlot,
  GetUserBookingHistory,
  deleteBooking,
  
};

