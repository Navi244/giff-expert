import { useState } from 'react'

export const useGifsLoading = ()=>{
  const [state, setState] = useState({
		data: [],
		loading: true
	});

	setTimeout({
		data: [1,2,3,4,5,6,7],
		loading: false
	},3000)

	return state;
};