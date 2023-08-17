import { InputForm } from "../../components/inputField"

function DrugStoreSubscription() {
    return (
        <form>
            <InputForm
                name={'SocialName'}
                title={'Razão Social'}
                type={'text'}
                required={true}
            />
        </form>
    )
}

export { DrugStoreSubscription }