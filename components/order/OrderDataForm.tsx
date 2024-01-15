const OrderDataForm = () => {
  return (
    <>
      <form>
        <div>
          <div>
            <input type="text" id="nombre" autoComplete="false" />
            <label htmlFor="">Receiver`&apos`;s name</label>
          </div>

          <div>
            <input type="text" />
            <label htmlFor="">Receiver`&apos`;s address</label>
          </div>
        </div>
      </form>
    </>
  )
}

export default OrderDataForm
