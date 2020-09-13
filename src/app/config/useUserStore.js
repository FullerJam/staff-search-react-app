const useUserStore = () => {
    const [user, setUser] = useState('');
  
  
    return {
      setUser,
      user
    };
  };
  
  export default useUserStore;