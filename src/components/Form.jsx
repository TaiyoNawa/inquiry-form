import {
	Button,
	Pane,
	TextInputField,
	Label,
	Textarea,
	SendMessageIcon,
  TextareaField,
  toaster,
} from 'evergreen-ui';
import { useState } from 'react';
import { postContact } from '../repositories/AxiosNotionRepository';
/* ↑送信する際の関数postContactの定義が書かれている
../repositories/AxiosNotionRepositoryファイルのインポート */
import { queryAllByAttribute } from '@testing-library/react';

export const Form = () => {
  /* 状態変数は、コンポーネント内でのデータの保持や更新に使用されます。
  name、email、content、value：これらはテキスト入力フィールドの値を管理するための状態変数です。
  各フィールドに対応しており、ユーザーが入力したデータを格納します。 */
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [content, setContent] = useState();
  const [value, setValue] = useState();



  const onsubmit = async (e) => {//送信するとき
    e.preventDefault();
    try {
      /* 判定が偽の時に実行したいなら先頭に!つける。
      !のつく判定式は先に行う方がいい */
      if (!name){
        toaster.warning('お名前を入力してください');
        return;
      }else if(!email){
        toaster.warning('メールアドレスを入力してください');
        return;
      }else if(!email.includes('@')){//ここの文字列改善
        toaster.warning('メールアドレスの形式で入力してください');
        return;
      }else if(!content){
        toaster.warning('本文を入力してください');
        return;
      }else if (name.length > 100) {
        toaster.warning('お名前の文字数が100文字を超えました');
        return; // アラートを表示したら送信を中止
      }else if(email.length > 200){
        toaster.warning('メールアドレスの文字数が200文字を超えました');
        return;
      }else if(content.length > 100){
        toaster.warning('本文の文字数が1000文字を超えました');
        return;
      }
  
      const { data } = await postContact({
        name,
        email,
        content,
      });
      console.log(data);
      toaster.success('送信しました');
    } catch (error) {
      console.error(error);
      toaster.danger('送信に失敗しました');
    }
    
  };

	return (
		<Pane
			borderRadius='10px'
			background='white'
			border='white'
			elevation={2}
			margin='auto'
			padding={24}
			display='flex'
			maxWidth='960px'
			flexDirection='column'
		>
			<h1 style={{color: '#3366FF' }}>お問い合わせ</h1>
			<Pane textAlign='left'>
				<form>
          <div style={{display: 'flex'}}>
            <label class='App-label'>お名前</label>
					  <TextInputField
						  width='70%'
						  placeholder='お名前を入力してください'
              hint="100文字以内"
						  onChange={(e) => setName(e.target.value)}
              
					  /> 
          </div>
          
          <div style={{display: 'flex'}}>
          <label class='App-label'>メールアドレス</label>
            <TextInputField
						  type='email'
						  width='70%'
              hint="200文字以内"
              placeholder='メールアドレスを入力してください'
						  onChange={(e) => setEmail(e.target.value)}
					  />
          </div>
          <Pane>
            <div style={{display: 'flex'}}>
            <label class='App-label'>本文</label>
              <TextareaField
                width='70%'
                placeholder='本文を入力してください'
                id='content'
                value={value}
                onChange={(e) => {//変更が発生したとき
                  setContent(e.target.value);

                }}
                hint='1000文字以内'
              />
          </div>
          </Pane>

          <div class='App-botton'style={{display: 'flex'}}>
            <Button
						  type='click'
						  marginTop={32}
						  size='large'
						  onClick={onsubmit}
              appearance='primary'
              intent='none'
						  iconBefore={SendMessageIcon}
              justifyContent='flex-end'
					  >
						送信
					  </Button> 
          </div>
					
				</form>
			</Pane>
		</Pane>
	);
};


/*onSabmitの部分の代用 
  const onsubmit = async (e) => {//送信するとき
  e.preventDefault();
  try {
    if (!name) {//判定が偽の時に実行したいなら先頭に!をつける
      alert('お名前を入力してください');
      return;//アラートを表示したら送信を中止
    }
    if (!email) {
      alert('メールアドレスを入力してください');
      return;
    }if (!content) {
      alert('本文を入力してください');
      return;
    }
    if (!email.includes('@')) {
      alert('メールアドレスの形式で入力してください');
      return;
    }
    if (name.length > 100) {
      alert('お名前の文字数が100文字を超えました');
      return;
    }
    if (content.length > 1000) {
      alert('本文の文字数が1000文字を超えました');
      return;
    }

    const { data } = await postContact({
      name,
      email,
      content,
    });
    console.log(data);
    alert('送信しました')
  } catch (error) {
    console.error(error);
    alert('送信に失敗しました')
  }
}; */

