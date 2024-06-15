import React, { useState, useEffect } from 'react';
import supabase from "./Supabase";

export default function addToCart(productId) {
    async function addCart() {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('id', productId);
        if (error) {
            console.log(error);
        } else {
            console.log(data);
        }
    }
    addCart();

    return null;
}