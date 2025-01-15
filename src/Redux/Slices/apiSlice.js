import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios_instance from "../../Config/axios";
import { WEATHER_KEY } from "../../Config/keyconfig";
export const WeatherData = createAsyncThunk('api/weatherdata', async({taskId, city})=>{
    console.log(taskId);
    console.log(city);
    const params = {key : `${WEATHER_KEY}`, q : city};
    const response = await axios_instance.get("/current.json", {params});
    return {taskid : taskId, Weatherdata : response.data}
});

const apiSlice = createSlice({
    name : 'weatherdata',
    initialState : {
        data : {},
        status : 'idle',
        error : null
    },
    reducers : {
        removeWeatherData : (state, action)=>{
            const id = action.payload.id;
            delete state.data[id];
            return state;
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(WeatherData.pending, (state)=>{
            state.status = "loading"
        })
        builder.addCase(WeatherData.fulfilled, (state, action)=>{
            state.status = "succeed";
            const { taskid , Weatherdata} = action.payload;
            state.data[taskid] = Weatherdata;
        })
        builder.addCase(WeatherData.rejected, (state, action)=>{
            state.status = "failed",
            state.error = action.error.message
        })
    }
})
export const {removeWeatherData} = apiSlice.actions;
export default apiSlice.reducer;