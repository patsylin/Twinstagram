import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchItemId } from "../api"; ///Need to figure this one out!
import ItemCard from "./ItemCard";

export default function IndividualItem() {
  const { id } = useParams();

  const [item, setItem] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function getSingleItem() {
      try {
        const APIResponse = await fetchSingleItem(id); // Adjust the API call
        setItem(APIResponse?.data?.item || null);
        setError(APIResponse?.error?.message || null);
      } catch (error) {
        setError(error.message);
      }
    }
    getSingleItem();
  }, [id]);

  return (
    <div>
      {error ? <p>{error}</p> : item && <ItemCard item={item} />}
    </div>
  );
}
