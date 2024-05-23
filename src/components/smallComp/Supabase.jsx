import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zllbsdzbgklnwapeaaeq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsbGJzZHpiZ2tsbndhcGVhYWVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0NTQ4NzYsImV4cCI6MjAzMjAzMDg3Nn0.gTrz4SOG8OMFitkrNMCU9U4SEmylu73fcUGrjgmjvRg'
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;